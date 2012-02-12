function calendar(){
	var today = new Date();
	var monthDays = new Array('31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31');
	var monthNames = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
	
	year = today.getFullYear();						//获取当前的年份
	thisDay = today.getDate();						//获取当前的日子
	if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
		monthDays[1] = 29;
	nDays = monthDays[today.getMonth()];	//获取当前月份的总天数
	
	//计算第一天的位置
	firstDay = today;
	firstDay.setDate(1);
	testMe = firstDay.getDate();
	if(testMe == 2)
		firstDay.setDate(0);
	startDay = firstDay.getDay();
	
	var str = "";
	str += "<div id='calendar_wrap'>";
	str += "<table id='wp-calendar'>";
	
	str += "<thead><tr>";
	str += "<caption>";
	str += monthNames[today.getMonth()];
	str += " ";
	str += year;
	str += "</caption>";
	str += "<th scope='col' title='Sunday'>S</th>";
	str += "<th scope='col' title='Monday'>M</th>";
	str += "<th scope='col' title='Tuesday'>T</th>";
	str += "<th scope='col' title='Wednesday'>W</th>";
	str += "<th scope='col' title='Thursday'>T</th>";
	str += "<th scope='col' title='Friday'>F</th>";
	str += "<th scope='col' title='Saturday'>S</th>";
	str += "</tr></thead>";
	
	str += "<tbody><tr>";
	column = 0;
	for(i=0; i<startDay; i++){	//先填补开头的空格数
		str += "<td colspan='1' class='pad'>&nbsp;</td>";
		column++;
	}
	for(i=1; i<=nDays; i++){
		if(i == thisDay){					//如果是当天，就加亮显示
			str += "<td title='today' style='color:#005ECF'><b>";
			str += i;
			str += "</b></td>";
		}
		else{
			str += "<td>";
			str += i
			str += "</td>";
		}
		column++;
		if(column == 7){					//满7天就换行
			str += "</tr><tr>";
			column = 0;
		}
	}	
	str += "</tr></tbody>";
	
	str += "<tfoot>";
	str += "</tfoot>";
	str += "</table></div>";

	document.writeln(str);
}