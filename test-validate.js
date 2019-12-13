const chai = require('chai');
const expect = chai.expect;
const validate = require('./validate');

describe('validate module',()=>{

    context('isUserNameValid',()=>{
        it('Function prototype : boolean isUserNameValid(username: String)', ()=>{
            expect(validate.isUserNameValid('kob')).to.be.true;
        });

        it('จำนวนตัวอักษรอย่างน้อย 3 ตัวอักษร', ()=>{
            expect(validate.isUserNameValid('tu')).to.be.false;
        });

        it('ทุกตัวต้องเป็นตัวเล็ก', ()=>{
            expect(validate.isUserNameValid('Kob')).to.be.false;
        });
        it('ทุกตัวต้องเป็นตัวเล็ก', ()=>{
            expect(validate.isUserNameValid('KoB')).to.be.false;
        });

        it('จำนวนตัวอักษรที่มากที่สุดคือ 15 ตัวอักษร', ()=>{
            expect(validate.isUserNameValid('kob123456789012')).to.be.true;
        });
        it('จำนวนตัวอักษรที่มากที่สุดคือ 15 ตัวอักษร', ()=>{
            expect(validate.isUserNameValid('kob1234567890123')).to.be.false;
        });


       

        
    });


    context('isAgeValid',()=>{
        it('Function prototype : boolean isAgeValid (age: String)', ()=>{
            expect(validate.isAgeValid('18')).to.be.true;
        });
        it('age ต้องเป็นข้อความที่เป็นตัวเลข', ()=>{
            expect(validate.isAgeValid('a')).to.be.false;
        });
        it('อายุต้องไม่ต่ำกว่า 18 ปี และไม่เกิน 100 ปี', ()=>{
            expect(validate.isAgeValid('17')).to.be.false;
        });
        it('อายุต้องไม่ต่ำกว่า 18 ปี และไม่เกิน 100 ปี', ()=>{
            expect(validate.isAgeValid('18')).to.be.true;
        });
        it('อายุต้องไม่ต่ำกว่า 18 ปี และไม่เกิน 100 ปี', ()=>{
            expect(validate.isAgeValid('100')).to.be.true;
        });
        it('อายุต้องไม่ต่ำกว่า 18 ปี และไม่เกิน 100 ปี', ()=>{
            expect(validate.isAgeValid('101')).to.be.false;
        });


       


       

        
    });

    context('isPasswordValid',()=>{
        it('Function prototype : boolean isUserNameValid(password: String)', ()=>{
            expect(validate.isPasswordValid('Tee789852@')).to.be.true;
        });
        it('จำนวนตัวอักษรอย่างน้อย 8 ตัวอักษร', ()=>{
            expect(validate.isPasswordValid ('Te211@')).to.be.false;
        });
        it('ต้องมีอักษรตัวใหญ่เป็นส่วนประกอบอย่างน้อย 1 ตัว', ()=>{
            expect(validate.isPasswordValid ('tee789852@')).to.be.false;
        });

        it('ต้องมีตัวเลขเป็นส่วนประกอบอย่างน้อย 3 ตัว', ()=>{
            expect(validate.isPasswordValid ('TeeteeTEE@')).to.be.false;
        });
        it("ต้องมีอักขระ พิเศษ !@#$%^&*()_+|~-=\`{}[]:'"+";"+'<>?,./ อย่างน้อย 1 ตัว', ()=>{
            expect(validate.isPasswordValid ('Tee789852')).to.be.false;
        });
    });

    context('isDateValid',()=>{
        it('Function prototype : boolean isDateValid(day: Integer, month: Integer, year: Integer)', ()=>{
            expect(validate.isDateValid(13,12,2019)).to.be.true;
        });
        it('day เริ่ม 1 และไม่เกิน 31 ในทุก ๆ เดือน', ()=>{
            expect(validate.isDateValid(0,12,2019)).to.be.false;
        });
        it('day เริ่ม 1 และไม่เกิน 31 ในทุก ๆ เดือน', ()=>{
            expect(validate.isDateValid(50,12,2019)).to.be.false;
        });
        it('month เริ่มจาก 1 และไม่เกิน 12 ในทุก ๆ เดือน', ()=>{
            expect(validate.isDateValid(13,0,2019)).to.be.false;
        });
        it('month เริ่มจาก 1 และไม่เกิน 12 ในทุก ๆ เดือน', ()=>{
            expect(validate.isDateValid(13,13,2019)).to.be.false;
        });
        it('year จะต้องไม่ต่ำกว่า 1970 และ ไม่เกิน ปี 2020', ()=>{
            expect(validate.isDateValid(13,13,1900)).to.be.false;
        });
        it('year จะต้องไม่ต่ำกว่า 1970 และ ไม่เกิน ปี 2020', ()=>{
            expect(validate.isDateValid(13,13,2031)).to.be.false;
        });



        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ มกราคม มี 31 วัน', ()=>{
            expect(validate.isDateValid(32,1,2031)).to.be.false;
        });
        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ กุมภาพันธ์ มี 28 วัน', ()=>{
            expect(validate.isDateValid(29,2,1900 )).to.be.false;
        });
        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ กุมภาพันธ์ มี 29 วัน(ในปีอธิกสุรทิน มี 29 วัน)', ()=>{
            expect(validate.isDateValid(30,2,2000)).to.be.false;
        });
        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ มีนาคม มี 31 วัน', ()=>{
            expect(validate.isDateValid(32,3,2031)).to.be.false;
        });
        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ เมษายน มี 30 วัน', ()=>{
            expect(validate.isDateValid(31,4,2031)).to.be.false;
        });
        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ พฤษภาคม มี 31 วัน', ()=>{
            expect(validate.isDateValid(32,5,2031)).to.be.false;
        });
        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ มิถุนายน มี 30 วัน', ()=>{
            expect(validate.isDateValid(31,6,2031)).to.be.false;
        });
        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ กรกฎาคม มี 31 วัน', ()=>{
            expect(validate.isDateValid(32,7,2031)).to.be.false;
        });
        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ สิงหาคม มี 31 วัน', ()=>{
            expect(validate.isDateValid(32,8,2031)).to.be.false;
        });
        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ กันยายน มี 30 วัน', ()=>{
            expect(validate.isDateValid(31,9,2031)).to.be.false;
        });
        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ ตุลาคม มี 31 วัน', ()=>{
            expect(validate.isDateValid(32,10,2031)).to.be.false;
        });
        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ พฤศจิกายน มี 30 วัน', ()=>{
            expect(validate.isDateValid(31,11,2031)).to.be.false;
        });
        it('เดือนแต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้ ธันวาคม มี 31 วัน', ()=>{
            expect(validate.isDateValid(32,12,2031)).to.be.false;
        });
        
        
        
    });





    
    
});