export const countSmsAmount = (text, smsSize) => {
    try {
        // if (typeof(text) !== 'string') throw new Error('1 argument is not a string type ' + typeof(text));
        // if (typeof(smsSize) !== 'number' || smsSize < 0) throw new Error('Incorrect sms amount');
        
        if (text.length === 0) {
            return "Введіть текст"; 
        }
        if (isNaN(smsSize) || !isFinite(smsSize) || smsSize <= 0) {
            return "Введіть валідну к-сть символів"; 
        }

        const smsCount = Math.ceil(text.length / smsSize); 
        return "Потрібно смс:     " + smsCount;

    } catch (err) {
        console.log ('Error occured ' + err);
    }
}