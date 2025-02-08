document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById('chessboard');
    const unlockedPiecesDisplay = document.getElementById('unlocked-pieces');
    const resetButton = document.getElementById('reset-button');

    let unlockedPieces = getCookie('unlockedPieces') ? JSON.parse(getCookie('unlockedPieces')) : ['♙', '♟'];

    const pieces = ['♙', '♟', '♖', '♜', '♘', '♞', '♗', '♝', '♕', '♛', '♔', '♚'];

    function createChessboard() {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = document.createElement('div');
                square.classList.add('square');
                if ((row + col) % 2 === 0) {
                    square.classList.add('white');
                }
                chessboard.appendChild(square);
            }
        }
    }

    function placeInitialPieces() {
        const squares = document.querySelectorAll('.square');
        squares[0].innerHTML = `<div class="piece">${unlockedPieces[0]}</div>`;
        squares[7].innerHTML = `<div class="piece">${unlockedPieces[1]}</div>`;
    }

    function updateUnlockedPiecesDisplay() {
        unlockedPiecesDisplay.textContent = unlockedPieces.join(', ');
    }

    function unlockNewPiece() {
        if (unlockedPieces.length < pieces.length) {
            const newPiece = pieces[unlockedPieces.length];
            unlockedPieces.push(newPiece);
            setCookie('unlockedPieces', JSON.stringify(unlockedPieces), 365);
            updateUnlockedPiecesDisplay();
        }
    }

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const cookieName = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return "";
    }

    function resetProgress() {
        unlockedPieces = ['♙', '♟'];
        setCookie('unlockedPieces', JSON.stringify(unlockedPieces), 365);
        updateUnlockedPiecesDisplay();
        placeInitialPieces();
    }

    chessboard.addEventListener('click', (e) => {
        if (e.target.classList.contains('piece')) {
            unlockNewPiece();
        }
    });

    resetButton.addEventListener('click', resetProgress);

    createChessboard();
    placeInitialPieces();
    updateUnlockedPiecesDisplay();
});
