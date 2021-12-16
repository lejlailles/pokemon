class MyAjax {
  constructor() {}

  getAdat(apivegpont, tomb, myCallback, callbackHiba) {
   
    $.ajax({
      url: apivegpont,
      type: "GET",
      success: function (result) {
      tomb=result;

        myCallback(tomb);
      },
      error: function (hiba) {
        callbackHiba(hiba);
      },
    });
  }
}
