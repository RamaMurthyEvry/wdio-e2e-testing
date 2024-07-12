
class UsersPage {

    get urlTextbox() { return $('#urlvalue'); }
    get ajaxBtn() { return $('#submitajax'); }
    get successElem() { return $('.alert-success'); }
    get statusText() { return $('#statuspre'); }
    get outputArea() { return $('#outputpre'); }
    get methodDropDown() { return $('#httpmethod') }
    get addParamBtn() { return $('#addprambutton') }
    get paramName1Textbox() { return $("//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value]") }
    get paramValue1Textbox() { return $("//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value]") }
    get paramName2Textbox() { return $("(//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value])[2]") }
    get paramValue2Textbox() { return $("(//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value])[2]") }

}
export default new UsersPage()