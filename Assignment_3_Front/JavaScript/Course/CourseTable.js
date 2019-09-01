function CourseTable(CourseArray) {

    //Table Header Courses
    var trow = $.parseHTML("<tr></tr>");
    $("#course_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> Title </th>"));
    $(trow).append($.parseHTML("<th> Stream </th>"));
    $(trow).append($.parseHTML("<th> Type </th>"));
    $(trow).append($.parseHTML("<th> Start Day </th>"));
    $(trow).append($.parseHTML("<th> End Day </th>"));
    $(trow).append($.parseHTML("<th> Action <button onclick='AddCourse();' data-toggle='modal' data-target='#addElementModal' class=' btn btn-sm btn-success'>+</button><button onclick='RefreshCourseHtml();' class=' btn btn-sm btn-success'>🔄</button> </th>"));


    //Table Body Courses
    for (var i = 0; i < CourseArray.length; i++) {

        trow = $.parseHTML("<tr onclick='GetCoursePerElement("+CourseArray[i].id+")'></tr>");
        $("#course_tbody").append(trow);
        $(trow).append($.parseHTML("<td>" + i + "</td>"));
        $(trow).append($.parseHTML("<td>" + CourseArray[i].Title + "</td>"));
        $(trow).append($.parseHTML("<td>" + CourseArray[i].Stream + "</td>"));
        $(trow).append($.parseHTML("<td>" + CourseArray[i].Type + "</td>"));
        $(trow).append($.parseHTML("<td>" + DateBuilder(CourseArray[i].StartD) + "</td>"));
        $(trow).append($.parseHTML("<td>" + DateBuilder(CourseArray[i].EndD) + "</td>"));

        $(trow).append($.parseHTML("<td>"
            + "<button onclick = 'EditRowCourse(this," + CourseArray[i].id + ");' data-toggle = 'modal' data-target = '#editElementModal'   class = 'btn btn-primary'> Edit   </button >"
            + "<button onclick = 'DeleteRowCourse(" + CourseArray[i].id + ");'    data-toggle = 'modal' data-target = '#deleteElementModal' class = 'btn btn-danger' > Delete </button > " 
            + "<button onclick = 'IncludeRowCourse(" + CourseArray[i].id + ");'    data-toggle = 'modal' data-target = '#includeElementModal' class = 'btn btn-success' > Add </button > " 
            + "</td > "
        ));

    }
}


