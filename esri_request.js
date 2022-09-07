require([
  "esri/request"
], function (
  esriRequest
) {
  esriRequest("https://services3.arcgis.com/JuknJLoAEm9DTWXh/arcgis/rest/services/Updated/FeatureServer/0/query?where=1%3D1&objectIds=&time=&resultType=none&outFields=Updated&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&sqlFormat=none&f=pjson&token=",{
    responseType:"json"
  }).then(function(response){
    document.getElementById("updated").innerHTML = response.data.features[0].attributes['Updated'];
  })  
});
