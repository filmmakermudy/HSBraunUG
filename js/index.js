"use strict";

document.documentElement.classList.add("js");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
menuToggle.hidden = false;

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const opening = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(opening));
  navigation.classList.toggle("is-open", opening);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".header")) closeMenu();
});
window.matchMedia("(min-width: 851px)").addEventListener("change", closeMenu);

const tabs = Array.from(document.querySelectorAll("[data-service]"));
const services = document.querySelector(".services");
const rotationToggle = document.querySelector(".service-rotation-toggle");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const serviceDuration = 8000;
let serviceElapsed = 0;
let serviceFrame = null;
let lastServiceTime = null;
let servicesVisible = !("IntersectionObserver" in window);
let servicesHovered = false;
let servicesFocused = false;
let rotationPaused = false;

function selectService(service, focusTab = false) {
  serviceElapsed = 0;
  lastServiceTime = null;
  services.style.setProperty("--service-progress", "0");
  tabs.forEach((tab) => {
    const selected = tab.dataset.service === service;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !selected;
    if (selected && focusTab) tab.focus();
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectService(tab.dataset.service));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex !== undefined) {
      event.preventDefault();
      selectService(tabs[nextIndex].dataset.service, true);
    }
  });
});

// The underline and the next panel share one clock, including all pauses.
function advanceService(time) {
  if (lastServiceTime !== null) serviceElapsed += time - lastServiceTime;
  lastServiceTime = time;
  if (serviceElapsed >= serviceDuration) {
    const index = tabs.findIndex((tab) => tab.getAttribute("aria-selected") === "true");
    selectService(tabs[(index + 1) % tabs.length].dataset.service);
    lastServiceTime = time;
  }
  services.style.setProperty("--service-progress", String(serviceElapsed / serviceDuration));
  serviceFrame = requestAnimationFrame(advanceService);
}

function updateServiceRotation() {
  const running = servicesVisible && !document.hidden && !servicesHovered &&
    !servicesFocused && !rotationPaused && !reducedMotion.matches;
  rotationToggle.hidden = reducedMotion.matches;
  services.classList.toggle("has-service-timer", !reducedMotion.matches);
  if (running && serviceFrame === null) {
    lastServiceTime = null;
    serviceFrame = requestAnimationFrame(advanceService);
  } else if (!running && serviceFrame !== null) {
    cancelAnimationFrame(serviceFrame);
    serviceFrame = null;
    lastServiceTime = null;
  }
}

rotationToggle.addEventListener("click", () => {
  rotationPaused = !rotationPaused;
  rotationToggle.textContent = rotationPaused ? "Automatischen Wechsel fortsetzen" : "Automatischen Wechsel pausieren";
  updateServiceRotation();
});
services.addEventListener("pointerenter", (event) => {
  if (event.pointerType !== "mouse") return;
  servicesHovered = true;
  updateServiceRotation();
});
services.addEventListener("pointerleave", () => {
  servicesHovered = false;
  updateServiceRotation();
});
services.addEventListener("focusin", () => {
  servicesFocused = true;
  updateServiceRotation();
});
services.addEventListener("focusout", (event) => {
  servicesFocused = services.contains(event.relatedTarget);
  updateServiceRotation();
});
document.addEventListener("visibilitychange", updateServiceRotation);
reducedMotion.addEventListener("change", updateServiceRotation);
if ("IntersectionObserver" in window) {
  const servicesObserver = new IntersectionObserver(([entry]) => {
    servicesVisible = entry.isIntersecting;
    updateServiceRotation();
  });
  servicesObserver.observe(services);
}
updateServiceRotation();

// Reflect the section currently beneath the sticky navigation.
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll("a").forEach((link) => {
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-20% 0px -55% 0px", threshold: 0 });
  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
}
