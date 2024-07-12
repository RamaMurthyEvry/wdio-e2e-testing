import { setText } from "../utils/Commands.ts"
import formControls from "./Form.contols.ts"

class FormPage {
   
    

    async setNames(fname:string, lname:string) {
       await setText(formControls.firstName, fname);
       await setText(formControls.lastName, lname);
    }

    async setEmail(email:string) {
        await setText(formControls.userEmail, email)
    }

    async setSubject(subject:string) {
        await setText(formControls.subject, subject);
    }

    async setMobileNumber(mobnum:string) {
        await setText(formControls.mobile, mobnum);
    }
}
export default new FormPage()