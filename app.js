// 100-199 информационный ответ
// 200-299 успешный запрос
// 300-399 перенаправление
// 400-499 ошибка клиента
// 500-599 ошибка сервера
const cards = document.getElementById('cards');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        
        let offset = 0;
      
        prev.addEventListener('click', () => {
          offset += 440; 
          cards.style.transform = `translateX(${offset}px)`;
        });
      
        next.addEventListener('click', () => {
          offset -= 440; 
          cards.style.transform = `translateX(${offset}px)`;
        });