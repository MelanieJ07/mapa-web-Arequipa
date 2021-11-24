var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_arequipa_limite_provincia_1 = new ol.format.GeoJSON();
var features_arequipa_limite_provincia_1 = format_arequipa_limite_provincia_1.readFeatures(json_arequipa_limite_provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arequipa_limite_provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arequipa_limite_provincia_1.addFeatures(features_arequipa_limite_provincia_1);
var lyr_arequipa_limite_provincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arequipa_limite_provincia_1, 
                style: style_arequipa_limite_provincia_1,
                interactive: true,
    title: 'arequipa_limite_provincia<br />\
    <img src="styles/legend/arequipa_limite_provincia_1_0.png" /> AREQUIPA<br />\
    <img src="styles/legend/arequipa_limite_provincia_1_1.png" /> CAMANA<br />\
    <img src="styles/legend/arequipa_limite_provincia_1_2.png" /> CARAVELI<br />\
    <img src="styles/legend/arequipa_limite_provincia_1_3.png" /> CASTILLA<br />\
    <img src="styles/legend/arequipa_limite_provincia_1_4.png" /> CAYLLOMA<br />\
    <img src="styles/legend/arequipa_limite_provincia_1_5.png" /> CONDESUYOS<br />\
    <img src="styles/legend/arequipa_limite_provincia_1_6.png" /> ISLAY<br />\
    <img src="styles/legend/arequipa_limite_provincia_1_7.png" /> LA UNION<br />\
    <img src="styles/legend/arequipa_limite_provincia_1_8.png" /> <br />'
        });
var format_arequipa_sitios_arqueologicos_2 = new ol.format.GeoJSON();
var features_arequipa_sitios_arqueologicos_2 = format_arequipa_sitios_arqueologicos_2.readFeatures(json_arequipa_sitios_arqueologicos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arequipa_sitios_arqueologicos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arequipa_sitios_arqueologicos_2.addFeatures(features_arequipa_sitios_arqueologicos_2);
var lyr_arequipa_sitios_arqueologicos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arequipa_sitios_arqueologicos_2, 
                style: style_arequipa_sitios_arqueologicos_2,
                interactive: true,
                title: '<img src="styles/legend/arequipa_sitios_arqueologicos_2.png" /> arequipa_sitios_arqueologicos'
            });
var format_arequipa_comunidades_campesinas_3 = new ol.format.GeoJSON();
var features_arequipa_comunidades_campesinas_3 = format_arequipa_comunidades_campesinas_3.readFeatures(json_arequipa_comunidades_campesinas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arequipa_comunidades_campesinas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arequipa_comunidades_campesinas_3.addFeatures(features_arequipa_comunidades_campesinas_3);
var lyr_arequipa_comunidades_campesinas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arequipa_comunidades_campesinas_3, 
                style: style_arequipa_comunidades_campesinas_3,
                interactive: true,
                title: '<img src="styles/legend/arequipa_comunidades_campesinas_3.png" /> arequipa_comunidades_campesinas'
            });

lyr_OSMStandard_0.setVisible(true);lyr_arequipa_limite_provincia_1.setVisible(true);lyr_arequipa_sitios_arqueologicos_2.setVisible(true);lyr_arequipa_comunidades_campesinas_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_arequipa_limite_provincia_1,lyr_arequipa_sitios_arqueologicos_2,lyr_arequipa_comunidades_campesinas_3];
lyr_arequipa_limite_provincia_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'CCDD': 'CCDD', 'NOMBDEP': 'NOMBDEP', 'CCPP': 'CCPP', 'NOMBPROV': 'NOMBPROV', 'CAPITAL': 'CAPITAL', 'IDPROV': 'IDPROV', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_arequipa_sitios_arqueologicos_2.set('fieldAliases', {'Dpto': 'Dpto', 'Prov': 'Prov', 'Dist': 'Dist', 'Nombre': 'Nombre', 'Fuente': 'Fuente', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_arequipa_comunidades_campesinas_3.set('fieldAliases', {'objectid': 'objectid', 'nom_dpto': 'nom_dpto', 'nom_prov': 'nom_prov', 'nom_dist': 'nom_dist', 'id_dist': 'id_dist', 'nom_comuni': 'nom_comuni', 'estado': 'estado', 'datum_orig': 'datum_orig', 'proyeccion': 'proyeccion', 'fuente': 'fuente', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_arequipa_limite_provincia_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'CCDD': 'TextEdit', 'NOMBDEP': 'TextEdit', 'CCPP': 'TextEdit', 'NOMBPROV': 'TextEdit', 'CAPITAL': 'TextEdit', 'IDPROV': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_arequipa_sitios_arqueologicos_2.set('fieldImages', {'Dpto': '', 'Prov': '', 'Dist': '', 'Nombre': '', 'Fuente': '', 'Latitud': '', 'Longitud': '', });
lyr_arequipa_comunidades_campesinas_3.set('fieldImages', {'objectid': 'TextEdit', 'nom_dpto': 'TextEdit', 'nom_prov': 'TextEdit', 'nom_dist': 'TextEdit', 'id_dist': 'TextEdit', 'nom_comuni': 'TextEdit', 'estado': 'TextEdit', 'datum_orig': 'TextEdit', 'proyeccion': 'TextEdit', 'fuente': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_arequipa_limite_provincia_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'CCDD': 'no label', 'NOMBDEP': 'no label', 'CCPP': 'no label', 'NOMBPROV': 'no label', 'CAPITAL': 'no label', 'IDPROV': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_arequipa_sitios_arqueologicos_2.set('fieldLabels', {'Dpto': 'no label', 'Prov': 'no label', 'Dist': 'no label', 'Nombre': 'no label', 'Fuente': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_arequipa_comunidades_campesinas_3.set('fieldLabels', {'objectid': 'no label', 'nom_dpto': 'no label', 'nom_prov': 'no label', 'nom_dist': 'no label', 'id_dist': 'no label', 'nom_comuni': 'no label', 'estado': 'no label', 'datum_orig': 'no label', 'proyeccion': 'no label', 'fuente': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', });
lyr_arequipa_comunidades_campesinas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});