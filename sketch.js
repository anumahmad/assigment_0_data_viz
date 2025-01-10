// setup() is called once at page-load
function setup() {
    // i took inspiration from https://p5js.org/examples/repetition-color-wheel/ for the colors and positioning
    createCanvas(2000, 1200);
    background(0);

    // Use Hue Saturation Brightness colors without stroke
    colorMode(HSB);
    noStroke();

    // Set angle mode to use degrees
    angleMode(DEGREES);
    describe(
        'Small circles, each with a different color, arranged in a circular path, displaying hues across the color spectrum.'
    );
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    // background(225);
    // textSize(32);
    // fill(180);
    // text(hr, 10, 30);
    // fill(100);
    // text(min, 10, 60);
    // fill(0);
    // text(sec, 10, 90);


    // Repeat for angles 0-360 at increments of 6 degrees for 60 total
    for (let angle = 0; angle < 360; angle += 6) {

        // i needed to figure out ?/360 = ?/60 so i just multiply by six to get the second

        adjusted_angle = (angle + 90)%360;

        // hour_color = 0;
        // minute_color = 0;
        // second_color = 0;

        if (sec == 0){
            print(min);
        }

        // Save current transformation
        push();

        // Move origin to center of canvas
        translate(width / 2, height / 2);

        // Rotate using current angle
        rotate(angle);

        // Move out of the center based on the distance (max is farthest and min is closest)
        translate(adjusted_angle*1.5, 0);

        // Set fill using current angle as hue
        fill(adjusted_angle, 50, 20);
        if (sec*6 == adjusted_angle){
            fill((angle + 60)%360, 10,50);}
        if (min*6 == adjusted_angle){
            fill((angle + 60)%360, 20, 50);}
        if ((hr%12)*30 == adjusted_angle){
            fill((angle + 60)%360, 100, 100);}


        // Draw a circle at current origin (150 pixels from center)
        circle(0, 0, 15, 10);


        // Restore canvas transformation
        pop();


    }

}