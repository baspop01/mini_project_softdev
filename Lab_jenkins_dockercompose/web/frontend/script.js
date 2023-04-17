


function cal() {
    var alcohol = 0;
    var weight = document.getElementById('weight').value
    var sum_alcohol = 0;
    var alcohol_liquor = 0;
    var alcohol_beer = 0;
    var alcohol_wine = 0;

    // cal_liquor
    var quantity_liquor = document.getElementById('quantity_liquor').value
    var type_liquor = document.getElementById('type_liquor').value
    var percent_liquor = document.getElementById('percent_liquor').value

    if (type_liquor == "Flat") {
        var result = parseInt(percent_liquor) * 350 / 100
        // document.getElementById('result_liquor').value = result
        sum_alcohol += result * quantity_liquor
        alcohol_liquor = result * quantity_liquor
    }
    if (type_liquor == "Round") {
        var result = parseInt(percent_liquor) * 700 / 100
        // document.getElementById('result_liquor').value = result
        sum_alcohol += result * quantity_liquor
        alcohol_liquor = result * quantity_liquor
    }


    // cal_beer

    var quantity_beer = document.getElementById('quantity_beer').value
    var type_beer = document.getElementById('type_beer').value
    var percent_beer = document.getElementById('percent_beer').value


    if (type_beer == "Can") {
        var result = parseInt(percent_beer) * 320 / 100
        // document.getElementById('result_beer').value = result
        sum_alcohol += result * quantity_beer
        alcohol_beer = result * quantity_beer
    }
    if (type_beer == "Bottle") {
        var result = parseInt(percent_beer) * 620 / 100
        // document.getElementById('result_beer').value = result
        sum_alcohol += result * quantity_beer
        alcohol_beer = result * quantity_beer
    }

    // cal_wine

    var quantity_wine = document.getElementById('quantity_wine').value
    var type_wine = document.getElementById('type_wine').value
    var percent_wine = document.getElementById('percent_wine').value


    if (type_wine == "Demi") {
        var result = parseInt(percent_wine) * 375 / 100
        // document.getElementById('result_wine').value = result
        sum_alcohol += result * quantity_wine
        alcohol_wine = result * quantity_wine
    }
    if (type_wine == "Standard") {
        var result = parseInt(percent_wine) * 750 / 100
        // document.getElementById('result_wine').value = result
        sum_alcohol += result * quantity_wine
        alcohol_wine = result * quantity_wine
    }
    if (type_wine == "Magnum") {
        var result = parseInt(percent_wine) * 1500 / 100
        // document.getElementById('result_wine').value = result
        sum_alcohol += result * quantity_wine
        alcohol_wine = result * quantity_wine
    }



    if (document.getElementById('male').checked &&  parseInt(weight) > 0) {
        document.getElementById('result_liquor').innerHTML = String(alcohol_liquor/ (weight * 0.68 * 10)).slice(0,6)
        document.getElementById('result_beer').innerHTML = String(alcohol_beer/ (weight * 0.68 * 10)).slice(0,6)
        document.getElementById('result_wine').innerHTML = String(alcohol_wine/ (weight * 0.68 * 10)).slice(0,6)

        // cal_all
        alcohol = sum_alcohol / (weight * 0.68 * 10)
        let text_slice = String(alcohol).slice(0,6)
        document.getElementById('ans').innerHTML = text_slice + " กรัม"

        if(alcohol == 0){
            document.getElementById('content_result').style.backgroundColor = 'grey'
            document.getElementById('description_result').innerHTML = 'ไม่มีแอลกอฮอล์ในเลือด'
            document.getElementById('behavior_result').innerHTML = 'รู้สึกปกติ ไม่มีอาการเมา'
        }
        else if(alcohol > 0 && alcohol <= 0.3){
            document.getElementById('content_result').style.backgroundColor = 'green'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับน้อย'
            document.getElementById('behavior_result').innerHTML = 'มีอาการสนุกสนาน ร่าเริงกว่าปกติ การยับยั้งชั่งใจลดลง'
        }
        else if(alcohol > 0.3 && alcohol <= 0.5){
            document.getElementById('content_result').style.backgroundColor = 'GOLD'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับปานกลาง'
            document.getElementById('behavior_result').innerHTML = 'การมองเห็นลดลง ความสามารถในการควบคุมร่างกายช้าลง'
        }
        else if(alcohol > 0.5 && alcohol <= 1){
            document.getElementById('content_result').style.backgroundColor = 'orange'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับสูง'
            document.getElementById('behavior_result').innerHTML = 'คลื่นไส้ อาเจียน เดินเซ พูดไม่รู้เรื่อง การตอบสนองและตัดสินใจช้าลง'
        }
        else if(alcohol > 1 && alcohol <= 2){
            document.getElementById('content_result').style.backgroundColor = 'DarkOrange'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับสูงมาก'
            document.getElementById('behavior_result').innerHTML = 'สูญเสียความจำบางส่วน เศร้า อารมณ์ฉุนเฉียวง่าย'
        }
        else if(alcohol > 2 && alcohol <= 3){
            document.getElementById('content_result').style.backgroundColor = 'maroon'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับอันตราย'
            document.getElementById('behavior_result').innerHTML = 'มองไม่ชัด มึนงง ควบคุมสติไม่ได้ หายใจลำบาก หัวใจเต้นผิดปกติ'
        }
        else if(alcohol > 3 ){
            document.getElementById('content_result').style.backgroundColor = 'red'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับอันตรายมาก'
            document.getElementById('behavior_result').innerHTML = 'ตาพร่ามัว ขาดสติโดยสมบูรณ์ หมดสติ อาจถึงขั้นเสียชีวิต'
        }


    }
    else if (document.getElementById('female').checked &&  parseInt(weight) > 0) {
        document.getElementById('result_liquor').innerHTML = alcohol_liquor
        document.getElementById('result_beer').innerHTML = alcohol_beer
        document.getElementById('result_wine').innerHTML = alcohol_wine

        // cal_all
        alcohol = sum_alcohol / (weight * 0.55 * 10)
        let text_slice = String(alcohol).slice(0,6)
        document.getElementById('ans').innerHTML = text_slice + " กรัม"

        if(alcohol == 0){
            document.getElementById('content_result').style.backgroundColor = 'grey'
            document.getElementById('description_result').innerHTML = 'ไม่มีแอลกอฮอล์ในเลือด'
            document.getElementById('behavior_result').innerHTML = 'รู้สึกปกติ ไม่มีอาการเมา'
        }
        else if(alcohol > 0 && alcohol <= 0.3){
            document.getElementById('content_result').style.backgroundColor = 'green'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับน้อย'
            document.getElementById('behavior_result').innerHTML = 'มีอาการสนุกสนาน ร่าเริงกว่าปกติ การยับยั้งชั่งใจลดลง'
        }
        else if(alcohol > 0.3 && alcohol <= 0.5){
            document.getElementById('content_result').style.backgroundColor = 'GOLD'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับปานกลาง'
            document.getElementById('behavior_result').innerHTML = 'การมองเห็นลดลง ความสามารถในการควบคุมร่างกายช้าลง'
        }
        else if(alcohol > 0.5 && alcohol <= 1){
            document.getElementById('content_result').style.backgroundColor = 'orange'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับสูง'
            document.getElementById('behavior_result').innerHTML = 'คลื่นไส้ อาเจียน เดินเซ พูดไม่รู้เรื่อง การตอบสนองและตัดสินใจช้าลง'
        }
        else if(alcohol > 1 && alcohol <= 2){
            document.getElementById('content_result').style.backgroundColor = 'DarkOrange'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับสูงมาก'
            document.getElementById('behavior_result').innerHTML = 'สูญเสียความจำบางส่วน เศร้า อารมณ์ฉุนเฉียวง่าย'
        }
        else if(alcohol > 2 && alcohol <= 3){
            document.getElementById('content_result').style.backgroundColor = 'maroon'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับอันตราย'
            document.getElementById('behavior_result').innerHTML = 'มองไม่ชัด มึนงง ควบคุมสติไม่ได้ หายใจลำบาก หัวใจเต้นผิดปกติ'
        }
        else if(alcohol > 3 ){
            document.getElementById('content_result').style.backgroundColor = 'red'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับอันตรายมาก'
            document.getElementById('behavior_result').innerHTML = 'ตาพร่ามัว ขาดสติโดยสมบูรณ์ หมดสติ อาจถึงขั้นเสียชีวิต'
        }
    }
    else {
        alert('please select your sex or fill in your weight')
    }
}
function reset_default(){
    // sex
    var sex = document.getElementsByName("sex");
    for(var i=0;i<sex.length;i++)
        sex[i].checked = false;

    // weight
    document.getElementById('weight').value = ''

    // liquor
    document.getElementById('quantity_liquor').value = '1'
    document.getElementById('type_liquor').value = 'Flat'
    document.getElementById('percent_liquor').value = '35'

    // beer
    document.getElementById('quantity_beer').value = '1'
    document.getElementById('type_beer').value = 'Can'
    document.getElementById('percent_beer').value = '5'

    // wine
    document.getElementById('quantity_wine').value = '1'
    document.getElementById('type_wine').value = 'Demi'
    document.getElementById('percent_wine').value = '10'

}