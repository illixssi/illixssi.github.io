document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', () => {
        if (seat.classList.contains('available')) {
            seat.classList.remove('available');
            seat.classList.add('unavailable');
        }
    });
});
