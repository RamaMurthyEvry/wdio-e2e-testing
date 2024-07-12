// import { APICalls } from "../enums/APICalls.ts";
// import { addLog, click, selectVisibleText, setText } from "../utils/commands.ts";
// import Page from "./page.ts";

class UsersPage {

    get url_textbox() { return $('#urlvalue'); }
    get ajax_btn() { return $('#submitajax'); }
     get success_elem() { return $('.alert-success'); }
     get status_text() { return $('#statuspre'); }
     get output_area() { return $('#outputpre'); }

     get method_dropdown() { return $('#httpmethod') }
     get addParam_Btn() { return $('#addprambutton') }
    
     get paramName1_textbox() { 
        return $("//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value]") 
    }
     get paramValue1_textbox() { 
        return $("//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value]") 
    }
     get paramName2_textbox() { 
        return $("(//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value])[2]") 
    }
     get paramValue2_textbox() { 
        return $("(//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value])[2]") 
    }

}
export default new UsersPage()