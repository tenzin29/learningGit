//JQuery
new textii

$(document).ready(function() {
	
	$(document).pngFix();
	
	function megaHoverOver(){
		$(this).find(".sub").stop().fadeTo('fast', 1).show();
			
		//Calculate width of all ul's
		(function($) { 
			jQuery.fn.calcSubWidth = function() {
				rowWidth = 0;
				//Calculate row
				$(this).find("ul").each(function() {					
					rowWidth += $(this).width(); 
				});	
			};
		})(jQuery); 
		
		if ( $(this).find(".row").length > 0 ) { //If row exists...
			var biggestRow = 0;	
			//Calculate each row
			$(this).find(".row").each(function() {							   
				$(this).calcSubWidth();
				//Find biggest row
				if(rowWidth > biggestRow) {
					biggestRow = rowWidth;
				}
			});
			//Set width
			$(this).find(".sub").css({'width' :biggestRow});
			$(this).find(".row:last").css({'margin':'0'});
			
		} else { //If row does not exist...
			
			$(this).calcSubWidth();
			//Set Width
			$(this).find(".sub").css({'width' : rowWidth});
			
		}
	}	
	function megaHoverOut(){ 
	  $(this).find(".sub").stop().fadeTo('fast', 0, function() {
		  $(this).hide(); 
	  });
	}
	var config = {    
		 sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)    
		 interval: 100, // number = milliseconds for onMouseOver polling interval    
		 over: megaHoverOver, // function = onMouseOver callback (REQUIRED)    
		 timeout: 500, // number = milliseconds delay before onMouseOut    
		 out: megaHoverOut // function = onMouseOut callback (REQUIRED)    
	};

	$("ul#topnav li .sub").css({'opacity':'0'});
	$("ul#topnav li").hoverIntent(config);
});
function setLocationValue(which) {
	if (which != 0 || which != "") {
		var dropDownList = document.inquiry.regarding;
		
		for (i = 0; i< dropDownList.options.length; i++) {    
			if (dropDownList.options[i].value == which) {
				dropDownList.options[i].selected = true;
				break;
			}
		}
	}
}
function clickclear(thisfield, defaulttext) {
	if (thisfield.value == defaulttext) {
		thisfield.value = "";
	}
}

function clickrecall(thisfield, defaulttext) {
	if (thisfield.value == "") {
		thisfield.value = defaulttext;
	}
}
function highlightMainNavigationBar(which) {
	document.getElementById(which).className = 'global_navigation_bar_highlighted';
}
function submitSearch() {
	YY_checkform('searchform','searchkeywords','#q','0','Please enter your search terms in the field below.');	
	if (document.MM_returnValue) {
		if (curPageType == 0) {
			if (curClientType == 1) { //SEO Network
				document.searchform.action = "/search/";
				document.searchform.submit();
			}
			if (curClientType == 2) { //Product Based
				document.searchform.action = "/srch/";
				document.searchform.submit();
			}
		} else {
			document.searchform.action = "/search-custom/";
			document.searchform.submit();
		}
	}
}
function setSlideStyle(current) {
	if (current == promotionHeadlines.length) {
		current = 0;
	}
	for (i = 0; i < promotionHeadlines.length; i++) {
		document.getElementById(promotionHeadlines[i]).className = 'div_feature';
	}
	document.getElementById(promotionHeadlines[current]).className = 'div_feature_selected';
}
// track an event with GA
function trackEvent(elementRef, param1, param2, param3) {
	// get the href from the link
	virtualLink = $(elementRef).attr('href');
	// push an event to track external links
	_gaq.push(['_trackEvent', param1, param2, param3]);
}
// track a page view with GA
function trackPageview(elementRef) {
	// get the href from the link
	virtualLink = $(elementRef).attr('href');
	// push a page view to GA
	_gaq.push(['_trackPageview', virtualLink]);
}
// track an external link with GA
function trackExternalLink(elementRef, param1, param2) {
	// get the href from the link
	redirectLink = $(elementRef).attr('href');
	// get the target from the link
	linkTarget = $(elementRef).attr('target');
	// push an event to track external links
	if (param1 == undefined && param2 == undefined) {
		_gaq.push(['_trackEvent', 'Outgoing links', 'Click', redirectLink]);
	} else if (param2 == undefined) {
		_gaq.push(['_trackEvent', param1, 'Click - Outgoing links', redirectLink]);
	} else {
		_gaq.push(['_trackEvent', param1, param2, redirectLink]);
	}
	// if the link is not opening in a new window delay the link
	if (linkTarget != '_blank') {
		setTimeout('document.location = "' + redirectLink + '"', 100);
	}
}
function sendSiteTunerConversion(stConversionType, stCconversionValue, callbackURL) {
	var url_post = "/apis/sitetuners/postConversion.php";
	
	$.ajax({
		type: "POST",
		url: url_post,
		data: "stConversionType="+ stConversionType +"& stCconversionValue="+ stCconversionValue,
		success: function(msg){
			if (callbackURL != undefined) {
				var target = callbackURL.target;
				if (target == '_blank') {
					window.open(callbackURL);
				} else {
					location.href = callbackURL;
				}
			}
		}
	});
}
//Macromedia Functions
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function YY_checkform() { //v4.71
//copyright (c)1998,2002 Yaromat.com
  var a=YY_checkform.arguments,oo=true,v='',s='',err=false,r,o,at,o1,t,i,j,ma,rx,cd,cm,cy,dte,at;
  for (i=1; i<a.length;i=i+4){
    if (a[i+1].charAt(0)=='#'){r=true; a[i+1]=a[i+1].substring(1);}else{r=false}
    o=MM_findObj(a[i].replace(/\[\d+\]/ig,""));
    o1=MM_findObj(a[i+1].replace(/\[\d+\]/ig,""));
    v=o.value;t=a[i+2];
    if (o.type=='text'||o.type=='password'||o.type=='hidden'){
      if (r&&v.length==0){err=true}
      if (v.length>0)
      if (t==1){ //fromto
        ma=a[i+1].split('_');if(isNaN(v)||v<ma[0]/1||v > ma[1]/1){err=true}
      } else if (t==2){
        rx=new RegExp("^[\\w\.=-]+@[\\w\\.-]+\\.[a-zA-Z]{2,4}$");if(!rx.test(v))err=true;
      } else if (t==3){ // date
        ma=a[i+1].split("#");at=v.match(ma[0]);
        if(at){
          cd=(at[ma[1]])?at[ma[1]]:1;cm=at[ma[2]]-1;cy=at[ma[3]];
          dte=new Date(cy,cm,cd);
          if(dte.getFullYear()!=cy||dte.getDate()!=cd||dte.getMonth()!=cm){err=true};
        }else{err=true}
      } else if (t==4){ // time
        ma=a[i+1].split("#");at=v.match(ma[0]);if(!at){err=true}
      } else if (t==5){ // check this 2
            if(o1.length)o1=o1[a[i+1].replace(/(.*\[)|(\].*)/ig,"")];
            if(!o1.checked){err=true}
      } else if (t==6){ // the same
            if(v!=MM_findObj(a[i+1]).value){err=true}
      }
    } else
    if (!o.type&&o.length>0&&o[0].type=='radio'){
          at = a[i].match(/(.*)\[(\d+)\].*/i);
          o2=(o.length>1)?o[at[2]]:o;
      if (t==1&&o2&&o2.checked&&o1&&o1.value.length/1==0){err=true}
      if (t==2){
        oo=false;
        for(j=0;j<o.length;j++){oo=oo||o[j].checked}
        if(!oo){s+='* '+a[i+3]+'\n'}
      }
    } else if (o.type=='checkbox'){
      if((t==1&&o.checked==false)||(t==2&&o.checked&&o1&&o1.value.length/1==0)){err=true}
    } else if (o.type=='select-one'||o.type=='select-multiple'){
      if(t==1&&o.selectedIndex/1==0){err=true}
    }else if (o.type=='textarea'){
      if(v.length<a[i+1]){err=true}
    }
    if (err){s+='* '+a[i+3]+'\n'; err=false}
  }
  if (s!=''){alert('The required information is incomplete or contains errors:\t\t\t\t\t\n\n'+s)}
  document.MM_returnValue = (s=='');
}

function parseStrForParam(param1, param2) {
	var str = param2;
	if ((str == null) || (str == "")) {
		return "";
	} else {
		if (str.indexOf(param1) == -1) {
			return "";
		}
		var startString = str.substr(str.indexOf(param1) + (param1.length + 1));
		var end = (startString.indexOf("&") != -1) ? (startString.indexOf("&")) : startString.length;
		var answer = startString.substr(0,end);
		return answer;
	}
}