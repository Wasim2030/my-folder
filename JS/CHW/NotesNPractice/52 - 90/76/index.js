class RailwayForm {
  submit() {
    alert("Form submitted");
  }
  cancel() {
    alert("this form is cancelled");
  }
}

let harryForm = new RailwayForm();
let rohan = new RailwayForm();

harryForm.submit();
rohan.submit();
rohan.cancel();
