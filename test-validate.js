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


    
    
});