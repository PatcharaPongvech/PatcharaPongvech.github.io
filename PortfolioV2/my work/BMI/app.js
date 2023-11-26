function calculate(){
    let height = document.getElementById("height").value ;
    let weight = document.getElementById("weight").value ;

    if( isNaN(height)|| isNaN(weight) ||height <= 0|| weight <=0 ){
        alert("กรุณากรอกข้อมูลให้ถูกต้อง")
        return;
    }

    let BMIvalue = weight / (height*height) ;
    document.getElementById("yourBMI").innerHTML = "<b>" +BMIvalue.toFixed(2) +"</b>"

    if(BMIvalue <=18.50){
        document.getElementById("Hadv").innerHTML = "ค่า BMI ของคุณคือ " + BMIvalue.toFixed(2) + " ซึ่งอยู่ในเกณท์น้ำหนักน้อย"
        document.getElementById("adv").innerHTML = "-คุณควรเลือกกินอาหารให้หลากหลายครบ 5 หมู่ โดยเน้นอาหารที่มีโปรตีน เพื่อช่วยในการเสริมสร้างกล้ามเนื้อ <br>" + "-รวมไปถึงเคลื่อนไหว และออกกำลังกายสม่ำเสมอ ในระดับความหนักปานกลาง"
    }else if(BMIvalue <=22.90){
        document.getElementById("Hadv").innerHTML = "ค่า BMI ของคุณคือ " + BMIvalue.toFixed(2) + " ซึ่งอยู่ในเกณท์น้ำหนักปกติ"
        document.getElementById("adv").innerHTML = "-คุณควรเลือกกินอาหารให้ได้สัดส่วนพอเหมาะ และเลือกอาหารที่ดีมีประโยชน์ ครบ 5 หมู่ <br>" + "-รวมไปถึงออกกำลังกาย หรือเคลื่อนไหวร่างกายสม่ำเสมอ"
    }else if(BMIvalue <=24.90){
        document.getElementById("Hadv").innerHTML = "ค่า BMI ของคุณคือ " + BMIvalue.toFixed(2) + " ซึ่งอยู่ในเกณท์ท้วม"
        document.getElementById("adv").innerHTML = "-ต้องเริ่มควบคุม และเลือกกินอาหารให้เหมาะสม ปรับเปลี่ยนพฤติกรรมการกินอาหาร โดยเน้นเลือกกินอาหารที่ดีมีประโยชน์ ครบ 5 หมู่ <br>" + "-รวมไปถึงเคลื่อนไหว และออกกำลังกายแบบแอโรบิคอย่างสม่ำเสมอ เลือกความเข้มข้นปานกลาง โดยทำอย่างน้อยวันละ 30 - 40 นาที 4 - 5 วัน/สัปดาห์ <br>" + "-เสริมการฝึกเวทเทรนนิ่ง เพื่อเพิ่มความแข็งแรง และปริมาณของกล้ามเนื้อ"
    }else if(BMIvalue <=29.9){
        document.getElementById("Hadv").innerHTML = "ค่า BMI ของคุณคือ " + BMIvalue.toFixed(2) + " ซึ่งอยู่ในเกณท์อ้วน"
        document.getElementById("adv").innerHTML = "-ปรับเปลี่ยนพฤติกรรมการกินอาหาร โดยเลือกกินอาหารให้หลากกลาย แต่มีประโยชน์ กำหนดปริมาณการกินที่เหมาะสมต่อความต้องการพลังงาน <br>" + "-ควรปรึกษา หรือรับคำแนะนำจากแพทย์ หรือผู้เชี่ยวชาญ เพื่อประเมินสมรรถภาพร่างกายก่อนจะเริ่มออกกำลังกาย<br>" + "-สร้างกล้ามเนื้อด้วยเวทเทรนนิ่ง"
    }else{
        document.getElementById("Hadv").innerHTML = "ค่า BMI ของคุณคือ " + BMIvalue.toFixed(2) + " ซึ่งอยู่ในเกณท์อ้วนมาก"
        document.getElementById("adv").innerHTML = "-เลือกกินให้มากๆ ลดอาหารหวาน หลีกเลี่ยงของทอด และอาหารไขมันสูง <br>" + "-หากิจกรรมที่ช่วยให้ได้ขยับร่างกายมากขึ้น หากต้องการที่จะเริ่มการออกกำลังกาย ควรเข้ารับคำแนะนำจากแพทย์<br>" + "-ฝึกความแข็งแรงของกล้ามเนื้อด้วยกิจกรรมเวทเทรนนิ่ง "
    }
}