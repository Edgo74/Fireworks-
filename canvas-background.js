

(()=>{
    const canvas = document.getElementById('canvas-background');

    const ctx = canvas.getContext('2d');
    
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;


    const drawBackground = () => {
          // The inner circle is at x=0, y=0, with radius=height
          // The outer circle is at x=0, y=0, with radius=width
        const gradient = ctx.createRadialGradient(0, 0, height,0, 0, width);

        gradient.addColorStop(0, '#002D62')
        gradient.addColorStop(0.5, '#0066b2')
        gradient.addColorStop(1, '#6699cc')


        ctx.fillStyle = gradient;
          // place its top-left corner at (0, 0), and
          // and give it a size of "width" wide by "height" tall.
        ctx.fillRect(0, 0, width, height);
    }

    const drawForeground = () => {
        ctx.fillStyle = '#13274F';
        ctx.fillRect(0, height*0.95, width, height);

        ctx.fillStyle = '#002D62';
        ctx.fillRect(0, height*0.95, width, height);
    }

    const numOfStars = 50;

    const random = (min,max) => Math.random()* (max-min) + min;
    

    const drawStars = () => {
        let countOfStars = numOfStars;

        ctx.fillStyle = '#E6E6FA';
        while(countOfStars--){
            const x = random(25, width-50);
            const y = random(25, height*0.5);
            const size = random(1, 4);

            ctx.fillRect(x, y, size, size);
        }
    }



    drawBackground();
    drawForeground();
    drawStars();
})()
