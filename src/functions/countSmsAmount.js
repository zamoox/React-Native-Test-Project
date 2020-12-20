export const countSmsAmount = (text, smsSize) => {
    try {
        // if (typeof(text) !== 'string') throw new Error('1 argument is not a string type ' + typeof(text));
        // if (typeof(smsSize) !== 'number' || smsSize < 0) throw new Error('Incorrect sms amount');
        
        // перевірка на наявність тексту
        if (text.length === 0) {
            return "Введіть текст"; 
        }

        // перевірка на числовий тип введених даних 
        if (isNaN(smsSize) || !isFinite(smsSize) || smsSize <= 0) {
            return "Введіть валідну к-сть символів"; 
        }
        
        // парсимо масив на слова
        const parsedText = text.split(' ');

        // знаходимо мінімальну довжину смс 
        let minSmsSize = 0;
        parsedText.forEach(e => minSmsSize = e.length > minSmsSize ? e.length: minSmsSize);
        console.log('minSms: ' + minSmsSize);
        if ( smsSize < minSmsSize ) {
            return "К-сть символів повинна бути більшою за довжину слова"
        }


        let smsInstance = '';
        let smsCounter = 0;
        let separator = ' ';
        
        //алгоритм розділення тексту на смс
        for (let i = 0; i < parsedText.length; i++ ) {
            if ( smsInstance.length + parsedText[i].length+1 <= smsSize) {
                separator = i !== 0 ? ' ': ''; 
                smsInstance += separator + parsedText[i];
            } else {
                console.log(smsInstance + " " + smsInstance.length);
                smsCounter++;
                smsInstance = parsedText[i];
            }
        }
        smsCounter++;
        return 'Потрібно смс:    ' + smsCounter;


    } catch (err) {
        console.log ('Error occured ' + err);
    }
}



      

