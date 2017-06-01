jQuery.support.cors = true;
 $(function () {
        
        $('#search').on('click',function(){

          var a=document.getElementById("code").value;
         if(document.getElementById("box").checked==true){
          var checkbox=0
         }else{
          var checkbox=1
         }
           
          var url1='http://192.168.7.82:3001/bom/bomc';
          var url='http://192.168.7.82:3001/bom/bomp';
          var data1 = {
            sql: a,
          };
          var data = {
            sql: a,
            checkbox:checkbox,
          };
          var table=$('#example').DataTable({
            "bDestroy":true,
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": true,
            "info": true,
            "autoWidth": false,
            'ajax': {  
              'url': url,  
              'data': data,  
              'type': 'POST'  
            }, 
            "fnInitComplete": function() {
                var total = 0;
                var table = document .getElementById ("example")
                var a = table.rows.length
                for (var i=1 ; i<a ; i++){
                  total+=parseFloat(table.rows[i].cells[2].innerHTML)
                }
                document .getElementById ("total").value=total
                },
            "aoColumns": [
              { "data": "物料代码" },
              { "data": "仓库" },
              { "data": "数量" },
            ],
            
          });
          
          $('#example1').DataTable({
            "bDestroy":true,
            "resetPaging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": true,
            "info": true,
            "autoWidth": false,
            'ajax': {  
              'url': url1,  
              'data': data1,  
              'type': 'POST'  
            },  
            "aoColumns": [
              { "data": "BOM内码" },
              { "data": "子料内码" },
              { "data": "子料编号" },
              { "data": "物料代码" },
              { "data": "物料名称" },
              { "data": "物料型号" },
              { "data": "单位用量" },
              { "data": "物料属性" },
              { "data": "即时库存" },
              { "data": "备注" },
          ]

          });
        
        });
    });