document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Удаляем класс active у всех ссылок
      navLinks.forEach(l => l.classList.remove('active'));

      // Добавляем класс active к нажатой ссылке
      this.classList.add('active');

      // Через 300 мс снимаем класс (имитация отпускания)
      setTimeout(() => {
        this.classList.remove('active');
      }, 300);
    });
  });
});
// Проверяем сохранённую тему при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});

// Переключатель темы
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    // Определяем текущую тему
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Переключаем
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});
// Управление боковой панелью
document.addEventListener('DOMContentLoaded', () => {
    const userPanel = document.getElementById('user-panel');
    
    // Кнопка для ПК (сворачивание)
    if (window.innerWidth > 768) {
        const toggleBtn = document.createElement('div');
        toggleBtn.className = 'toggle-panel-btn';
        toggleBtn.innerHTML = '◀';
        toggleBtn.addEventListener('click', () => {
            userPanel.classList.toggle('collapsed');
        });
        userPanel.appendChild(toggleBtn);
    }
    
    // Для мобильных: показ панели по кнопке в шапке (дополните HTML)
    // Пример: добавить кнопку в header и повесить обработчик
});

// Автоматическое скрытие на мобильных
window.addEventListener('resize', () => {
    const userPanel = document.getElementById('user-panel');
    if (window.innerWidth <= 768) {
        userPanel.classList.add('collapsed');
    } else {
        userPanel.classList.remove('collapsed');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const accountBtn = document.getElementById('account-btn');
    const accountMenu = document.getElementById('account-menu');

    // Открытие/скрытие меню
    accountBtn.addEventListener('click', () => {
        const isExpanded = accountBtn.getAttribute('aria-expanded') === 'true';
        
        accountBtn.setAttribute('aria-expanded', !isExpanded);
        accountMenu.hidden = isExpanded;

        if (!isExpanded) {
            // Закрываем при клике вне меню
            const closeMenu = (e) => {
                if (!accountMenu.contains(e.target) && e.target !== accountBtn) {
                    accountBtn.setAttribute('aria-expanded', 'false');
                    accountMenu.hidden = true;
                    document.removeEventListener('click', closeMenu);
                }
            };
            document.addEventListener('click', closeMenu);
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const userLoggedIn = document.getElementById('user-logged-in');
    const userNotLoggedIn = document.getElementById('user-not-logged-in');

    // Пример: показать панель авторизации (имитация выхода)
    document.querySelector('.btn-logout')?.addEventListener('click', () => {
        userLoggedIn.style.display = 'none';
        userNotLoggedIn.style.display = 'block';
    });

    // Пример: показать панель пользователя (имитация входа)
    document.querySelectorAll('.btn-login, .btn-register').forEach(btn => {
        btn.addEventListener('click', () => {
            userLoggedIn.style.display = 'block';
            userNotLoggedIn.style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const userLoggedIn = document.getElementById('user-logged-in');
    const userNotLoggedIn = document.getElementById('user-not-logged-in');

    // Пример: показать панель авторизации (имитация выхода)
    document.querySelector('.btn-logout')?.addEventListener('click', () => {
        userLoggedIn.style.display = 'none';
        userNotLoggedIn.style.display = 'block';
    });

    // Пример: показать панель пользователя (имитация входа)
    document.querySelectorAll('.btn-login, .btn-register').forEach(btn => {
        btn.addEventListener('click', () => {
            userLoggedIn.style.display = 'block';
            userNotLoggedIn.style.display = 'none';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const switchToRegister = document.getElementById('switch-to-register');
    const formTitle = authForm.querySelector('.form-title');
    const submitBtn = authForm.querySelector('.btn-submit');

    // Показываем форму при загрузке (можно убрать, если нужно скрывать)
    authForm.classList.add('active', 'animated');

    // Переключение между "Вход" и "Регистрация"
    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();

        if (formTitle.textContent === 'Вход в аккаунт') {
            formTitle.textContent = 'Регистрация';
            submitBtn.textContent = 'Зарегистрироваться';
            switchToRegister.textContent = 'Уже есть аккаунт? Войти';
        } else {
            formTitle.textContent = 'Вход в аккаунт';
            submitBtn.textContent = 'Войти';
            switchToRegister.textContent = 'Нет аккаунта? Зарегистрироваться';
        }

        // Перезапускаем анимацию
        authForm.classList.remove('animated');
        void authForm.offsetWidth; // Триггер перерисовки
        authForm.classList.add('animated');
    });

    // Обработчик отправки формы (пример)
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Форма отправлена!'); // Замените на реальную логику
    });
});
