import { getUserRole } from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const userRole = getUserRole();

  const sidebarLinks = document.getElementById("sidebarLinks");
  const sidebar = document.getElementById("sidebarMenu");
  const toggleBtn = document.getElementById("sidebarToggle");
  const overlay = document.getElementById("sidebarOverlay");

  const currentPage = window.location.pathname.split("/").pop(); // e.g. 'dashboard.html'
  const isManagerKpiPage = [
    "manager-view-assigned-kpi.html",
    "manager-assign-kpi.html",
    "manager-view-evidence.html",
  ].includes(currentPage);
  const isStaffKpiPage = [
    "staff-view-kpi.html",
    "staff-kpi-detail.html",
  ].includes(currentPage);
  const isProfilePage = [
    "user-profile.html",
    "user-edit-profile.html",
    "user-change-password.html",
    "user-deactivate-account.html",
  ].includes(currentPage);

  if (sidebarLinks) {
    sidebarLinks.innerHTML = `
      <li class="nav-item">
        <a class="nav-link ${
          currentPage === "dashboard.html" ? "active" : ""
        }" href="dashboard.html">
          <i class="fas fa-home"></i> Dashboard
        </a>
      </li>
      ${
        userRole === "manager"
          ? `
        <li class="nav-item">
          <a class="nav-link ${
            isManagerKpiPage ? "active" : ""
          }" href="manager-view-assigned-kpi.html">
            <i class="fas fa-book"></i> KPI Management
          </a>
        </li>
      `
          : `
        <li class="nav-item">
          <a class="nav-link ${
            isStaffKpiPage ? "active" : ""
          }" href="staff-view-kpi.html">
            <i class="fas fa-tasks"></i> My KPI
          </a>
        </li>
      `
      }
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-comments"></i> Notifications
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link ${
          isProfilePage ? "active" : ""
        }" href="user-profile.html">
          <i class="fas fa-user"></i> Profile
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="user-logout.html">
          <i class="fas fa-sign-out-alt"></i> Logout
        </a>
      </li>
    `;
  }

  if (toggleBtn && sidebar && overlay) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });

    document.addEventListener("click", (e) => {
      const isClickInside =
        sidebar.contains(e.target) || toggleBtn.contains(e.target);
      if (!isClickInside) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      }
    });
  }
});
