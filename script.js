$(function () {
    var form = {
        Name: '',
        Phone: '',
        City: $("select[name='Город проживания']").val()
    }
    initForm();

    if($('#form34359534').length > 0) {      
        
        if(hasData()) {
            fillForm();
        }
        
        $("input[name='Name']").on('change', function(){
            form.Name = $(this).val();
            updateForm();
        })

        $("input[name='Phone']").on('change', function(){
            form.Phone = $(this).val();
            updateForm();
        })

        $("select[name='Город проживания']").on('change', function(){
            form.City = $(this).val();
            updateForm();
        })    
    }

    function fillForm() {
        $("input[name='Name']").val(form.Name);
        $("input[name='Phone']").val(form.Phone);
        $("select[name='Город проживания']").val(form.City);
        $("input[name='Согласие участия в розыгрыше']").attr('checked', true);
    }

    function initForm() {
        if(localStorage.getItem('formxl') !== null) {
            form = JSON.parse(localStorage.getItem('formxl'));
        }

    }

    function updateForm() {
        localStorage.setItem('formxl', JSON.stringify(form));
    }

    function hasData() {
        if(localStorage.getItem('formxl') !== null) {
            form = JSON.parse(localStorage.getItem('formxl'));
            return true;
        }
        return false;
    }

});