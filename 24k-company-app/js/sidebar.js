/* SIDEBAR BUILDER — shared across pages */

function getUser() {
  const raw = localStorage.getItem('24k_user');
  if (!raw) return { name: 'Usuário', initials: 'U', role: 'client' };
  return JSON.parse(raw);
}

function buildClientSidebar(activePage) {
  const user = getUser();
  const notifications = parseInt(localStorage.getItem('24k_notifs') || '3');

  document.getElementById('sidebar-placeholder').innerHTML = `
  <aside class="sidebar">
    <div class="sidebar-logo">
      <div class="logo-mark">24K</div>
      <div class="logo-sub">Company</div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-label">Minha Conta</div>
      <a href="client-dashboard.html" class="nav-item ${activePage === 'dashboard' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        Dashboard
      </a>
      <a href="materials.html" class="nav-item ${activePage === 'materials' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        Materiais
        ${notifications > 0 ? `<span class="nav-badge">${notifications}</span>` : ''}
      </a>
      <a href="campaigns.html" class="nav-item ${activePage === 'campaigns' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
        Campanhas
      </a>
      <a href="feedback.html" class="nav-item ${activePage === 'feedback' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
        Feedback
      </a>

      <div class="nav-section-label" style="margin-top:16px">Configurações</div>
      <a href="credentials.html" class="nav-item ${activePage === 'credentials' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
        Minhas Senhas
      </a>
      <button class="nav-item" onclick="logout()">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
        Sair
      </button>
    </nav>
    <div class="sidebar-user">
      <div class="user-avatar">${user.initials || 'U'}</div>
      <div class="user-info">
        <div class="user-name">${user.name || 'Cliente'}</div>
        <div class="user-role">Cliente</div>
      </div>
    </div>
  </aside>
  `;
}

function buildTeamSidebar(activePage) {
  const user = getUser();
  document.getElementById('sidebar-placeholder').innerHTML = `
  <aside class="sidebar">
    <div class="sidebar-logo">
      <div class="logo-mark">24K</div>
      <div class="logo-sub">Operacional</div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-label">Equipe</div>
      <a href="team-dashboard.html" class="nav-item ${activePage === 'dashboard' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        Dashboard
      </a>
      <a href="clients-list.html" class="nav-item ${activePage === 'clients' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/></svg>
        Clientes
      </a>
      <a href="upload-materials.html" class="nav-item ${activePage === 'upload' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
        Upload Materiais
      </a>
      <a href="agent.html" class="nav-item ${activePage === 'agent' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"/></svg>
        Agente IA
        <span class="nav-badge" style="background:var(--gold)">Beta</span>
      </a>
      <button class="nav-item" onclick="logout()">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
        Sair
      </button>
    </nav>
    <div class="sidebar-user">
      <div class="user-avatar" style="background:rgba(59,130,246,0.15);border-color:rgba(59,130,246,0.3);color:#3B82F6">${user.initials || 'AS'}</div>
      <div class="user-info">
        <div class="user-name">${user.name || 'Colaborador'}</div>
        <div class="user-role">Equipe Operacional</div>
      </div>
    </div>
  </aside>
  `;
}

function buildExecutiveSidebar(activePage) {
  const user = getUser();
  document.getElementById('sidebar-placeholder').innerHTML = `
  <aside class="sidebar">
    <div class="sidebar-logo">
      <div class="logo-mark">24K</div>
      <div class="logo-sub">Gerência</div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-label">Executivo</div>
      <a href="executive-dashboard.html" class="nav-item ${activePage === 'dashboard' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        Visão Geral
      </a>
      <a href="all-clients.html" class="nav-item ${activePage === 'clients' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/></svg>
        Todos os Clientes
      </a>
      <a href="team-performance.html" class="nav-item ${activePage === 'team' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
        Equipe
      </a>
      <a href="agent.html" class="nav-item ${activePage === 'agent' ? 'active' : ''}">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"/></svg>
        Agente IA
      </a>
      <button class="nav-item" onclick="logout()">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
        Sair
      </button>
    </nav>
    <div class="sidebar-user">
      <div class="user-avatar" style="background:var(--gold-muted);border-color:var(--gold-border);color:var(--gold)">${user.initials || 'LH'}</div>
      <div class="user-info">
        <div class="user-name">${user.name || 'Luis Henrique'}</div>
        <div class="user-role">Fundador / Gestor</div>
      </div>
    </div>
  </aside>
  `;
}

function logout() {
  localStorage.removeItem('24k_role');
  localStorage.removeItem('24k_user');
  window.location.href = 'index.html';
}

function showToast(msg, type = 'gold') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { gold: '✦', success: '✓', error: '✕' };
  toast.innerHTML = `<span style="color:var(--${type === 'gold' ? 'gold' : type === 'success' ? 'success' : 'error'})">${icons[type] || '✦'}</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}
