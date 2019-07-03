let events = (()=>{

    function showSectionRight(sectionToShow){
        
        

        //hide all sections
        $('.view').css("display", "none")

        //show specific section
        $("#"+sectionToShow).css("display","block")
        console.log(sectionToShow)
        
    }

    

    return{
        showSectionRight

    }
})();