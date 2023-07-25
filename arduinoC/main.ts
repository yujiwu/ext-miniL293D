//mini-L293D module

enum motors {
    M1,M2
}

enum directions {
    Forward, Backward
}

//% color="#fcba03" iconWidth=40 iconHeight=40
namespace miniL293D {

    //% block="initialize mini-L293D module" blockType="command"
    export function initModule(){
        Generator.addObject('motorPin1', 'const int', "motorPin1 = 2;", true);
        Generator.addObject('motorPin2', 'const int', "motorPin2 = 3;", true);
        Generator.addObject('motorPin3', 'const int', "motorPin3 = 4;", true);
        Generator.addObject('motorPin4', 'const int', "motorPin4 = 5;", true);
        Generator.addObject('enablePinA', 'const int', "enablePinA = 9;", true);
        Generator.addObject('enablePinB', 'const int', "enablePinB = 10;", true);
        Generator.addSetup('pinMode','pinMode(motorPin1, OUTPUT);\n\t'+
        'pinMode(motorPin2, OUTPUT);\n\t'+
        'pinMode(motorPin3, OUTPUT);\n\t'+
        'pinMode(motorPin4, OUTPUT);\n\t'+
        'pinMode(enablePinA, OUTPUT);\n\t'+
        'pinMode(enablePinB, OUTPUT);\n',true);
    }

    //% block="Motor [M] moves [DIR] with the speed of [S]" blockType="command"
    //% M.shadow="dropdown" M.options="motors" M.defl=motors.M1
    //% DIR.shadow="dropdown" DIR.options="directions" DIR.defl=directions.Forward
    //% S.shadow="range" S.params.min=0 S.params.max=255 S.params.defl=255
    export function setMotor(parameter: any, block: any){
        Generator.addObject('moveForward', 'void', 'moveForward(int motor, int speed) {\n\t'+
            'if (motor == 1){\n\t'+
            '  digitalWrite(motorPin1, HIGH);\n\t'+
            '  digitalWrite(motorPin2, LOW);\n\t'+
            '  analogWrite(enablePinA, speed);\n\t'+
            '}else{\n\t'+
            '  digitalWrite(motorPin3, HIGH);\n\t'+
            '  digitalWrite(motorPin4, LOW);\n\t'+
            '  analogWrite(enablePinB, speed);\n\t'+
            '}\n'+
            '}\n', true);

        Generator.addObject('moveBackward', 'void', 'moveBackward(int motor, int speed) {\n\t'+
            'if (motor == 1){\n\t'+
            '  digitalWrite(motorPin1, LOW);\n\t'+
            '  digitalWrite(motorPin2, HIGH);\n\t'+
            '  analogWrite(enablePinA, speed);\n\t'+
            '}else{\n\t'+
            '  digitalWrite(motorPin3, LOW);\n\t'+
            '  digitalWrite(motorPin4, HIGH);\n\t'+
            '  analogWrite(enablePinB, speed);\n\t'+
            '}\n'+
          '}\n', true);

        let m = parameter.M.code;
        m = (m == 'M1') ? 1 : 2;
        let dir = parameter.DIR.code;
        let speed = parameter.S.code;
        if (dir == 'Forward')
            Generator.addCode(`moveForward(${m}, ${speed});`);
        else 
            Generator.addCode(`moveBackward(${m}, ${speed});`);        
    }

    //% block="stop motor [M]" blockType="command"
    //% M.shadow="dropdown" M.options="motors" M.defl="motors.M1"
    export function stopMotor(parameter: any, block: any){
        Generator.addObject('stopMotor', 'void', 'stopMotor(int motor) {\n\t'+
            'if (motor == 1){\n\t'+
            '  digitalWrite(motorPin1, LOW);\n\t'+
            '  digitalWrite(motorPin2, LOW);\n\t'+
            '}else{\n\t'+
            '  digitalWrite(motorPin3, LOW);\n\t'+
            '  digitalWrite(motorPin4, LOW);\n\t'+
            '}\n'+
          '}\n', true);
        
        let m = parameter.M.code;
        m = (m == 'M1') ? 1 : 2;
        Generator.addCode(`stopMotor(${m});`);
    }

}
