class bankhomepage{

    get homebutton(){
        return $("button.btn.home");
    }
    get customerloginbutton(){
        return $("//button[text()='Customer Login']");
    }


}
export default new bankhomepage();