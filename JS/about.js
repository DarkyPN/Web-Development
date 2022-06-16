function init(){
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.open("GET","/RESOURCES/detail-car.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML;
  
    document.write("<table><tr><th>motor</th><th>putere</th><th>transmisiune</th><th>pret</th></tr>");
    var x=xmlDoc.getElementsByTagName("detalii");
    for (i=0;i<x.length;i++)
      {
      document.write("<tr><td>");
      document.write(x[i].getElementsByTagName("motor")[0].childNodes[0].nodeValue);
      document.write("</td><td>");
      document.write(x[i].getElementsByTagName("putere")[0].childNodes[0].nodeValue);
      document.write("</td><td>");
      document.write(x[i].getElementsByTagName("transmisiune")[0].childNodes[0].nodeValue);
      document.write("</td><td>");
      document.write(x[i].getElementsByTagName("pret")[0].childNodes[0].nodeValue);
      document.write("</td></tr>");
  
      }
    document.write("</table>");
    document.getElementById("demo").innerHTML = table;
  }