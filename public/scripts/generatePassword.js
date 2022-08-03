      $(document).ready(function () {

        //password generator
        $("#slider").slider({
          min: 0,
          max: 100,
          step: 1,
          values: [10],
          slide: function (event, ui) {
            for (let i = 0; i < ui.values.length; ++i) {
              $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
            }
          }
        });

        $("input.sliderValue").change(function () {
          let $this = $(this);
          $("#slider").slider("values", $this.data("index"), $this.val());
        });


        $(".check-container").click(function () {
          let checkbox = $(this).find("input[type='checkbox']");
          let checked = checkbox.prop('checked');
          checkbox.prop("checked", !checked);

          if ($(".check-container input:checkbox:checked").length === 0) {
            $('#passwordBtn').prop('disabled', true);
            $("#error-1").show();
          }

          if ($(".check-container input:checkbox:checked").length > 0) {
            $('#passwordBtn').prop('disabled', false);
            $("#error-1").hide();
            $("#passwordBtn").attr("data-bs-dismiss", "modal")
          }
        });



  $("#passwordBtn").click(function() {

      let result = '';
      let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let lowercase = 'abcdefghijklmnopqrstuvwxyz';
      let numbers = '0123456789';
      let symbols = '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
      let i = 0;
      let length = $('input.sliderValue').val()


      while (i < length) {
        if ($("#uppercaseCheck").prop('checked')) {
          result += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
          i++;
        }
        if ($("#lowercaseCheck").prop('checked')) {
          result += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
          i++;
        }
        if ($("#numCheck").prop('checked')) {
          result += numbers.charAt(Math.floor(Math.random() * numbers.length));
          i++;
        }
        if ($("#symCheck").prop('checked')) {
          result += symbols.charAt(Math.floor(Math.random() * symbols.length));
          i++;
        }
      }

      let arr = result.split('');

      arr.sort(function () {
        return 0.5 - Math.random();
      });

      let password = arr.join('');

      $('#password-field').val(password);



  });

  });
