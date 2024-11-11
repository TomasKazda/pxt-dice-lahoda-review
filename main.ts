let diceSides: number = 6;
const diceMAX: number = 99;
const diceMIN: number = 1;
let Debounce: boolean = false;
music.play(music.tonePlayable(Note.F4, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone);

function showCustomPattern(value: number) {
    if (value == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
        `);
    } else if (value == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
        `);
    } else if (value == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
        `);
    } else if (value == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
        `);
    } else if (value == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
        `);
    } else if (value == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
        `);
    } else {
        whaleysans.showNumber(value);
    }
}

while (true) {
    if (input.buttonIsPressed(Button.A)) {
        if (diceSides > diceMIN) {
            diceSides -= 1;
        }
        showCustomPattern(diceSides); 
    }

    if (input.buttonIsPressed(Button.B)) {
        if (diceSides < 100) {
            diceSides += 1;
        }

        if (diceSides <= diceMAX)
        showCustomPattern(diceSides); else {

            basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .`);

        }

    }


    if (input.isGesture(Gesture.Shake)) {
        if (Debounce == false) {
            Debounce = true;
            let randomNumber = randint(1, diceSides);

            if (diceSides <= 6) {
                showCustomPattern(randomNumber);
            }

            if (diceSides > 6) {
                if (randomNumber != 100) {
                    whaleysans.showNumber(randomNumber);
                }
            }

            if (randomNumber == 100) {

                basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .`);

                music.play(music.stringPlayable("C C5 D B E A F G ", 120), music.PlaybackMode.UntilDone)

            }
            
            music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone);
        }
    }

    if (input.pinIsPressed(TouchPin.P2)) {
        if (Debounce == true) {
            Debounce = false;
            music.play(music.tonePlayable(Note.A, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone);
        }
    }

    basic.pause(50);
}