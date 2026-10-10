alert ("Hello World");
// Select the body tag
        const bdy = document.getElementById('demo');

        // Add event listener
        bdy.addEventListener('click', () => {
            // Check current background color and change it
            if (document.body.style.backgroundColor === 'bisque') {
                document.body.style.backgroundColor = 'pink';
            } else {
                document.body.style.backgroundColor = 'bisque';
            }
        });