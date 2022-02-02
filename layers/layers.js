var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_reasprioritriasparaconservaodabiodiversidade_1 = new ol.format.GeoJSON();
var features_reasprioritriasparaconservaodabiodiversidade_1 = format_reasprioritriasparaconservaodabiodiversidade_1.readFeatures(json_reasprioritriasparaconservaodabiodiversidade_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasprioritriasparaconservaodabiodiversidade_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasprioritriasparaconservaodabiodiversidade_1.addFeatures(features_reasprioritriasparaconservaodabiodiversidade_1);
var lyr_reasprioritriasparaconservaodabiodiversidade_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasprioritriasparaconservaodabiodiversidade_1, 
                style: style_reasprioritriasparaconservaodabiodiversidade_1,
                interactive: true,
    title: 'Áreas prioritárias para conservação da biodiversidade<br />\
    <img src="styles/legend/reasprioritriasparaconservaodabiodiversidade_1_0.png" /> ALTA<br />\
    <img src="styles/legend/reasprioritriasparaconservaodabiodiversidade_1_1.png" /> ESPECIAL<br />\
    <img src="styles/legend/reasprioritriasparaconservaodabiodiversidade_1_2.png" /> EXTREMA<br />\
    <img src="styles/legend/reasprioritriasparaconservaodabiodiversidade_1_3.png" /> MUITO ALTA<br />\
    <img src="styles/legend/reasprioritriasparaconservaodabiodiversidade_1_4.png" /> <br />'
        });
var format_Prioridadeparaconservaodaflora_2 = new ol.format.GeoJSON();
var jsonSource_Prioridadeparaconservaodaflora_2 = new ol.source.Vector({
    attributions: ' ',
    format: format_Prioridadeparaconservaodaflora_2
});var lyr_Prioridadeparaconservaodaflora_2 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Prioridadeparaconservaodaflora_2, 
    style: style_Prioridadeparaconservaodaflora_2,
    interactive: true,
    title: " Prioridade para conservação da flora"
});

function getPrioridadeparaconservaodaflora_2Json(geojson) {
    var features_Prioridadeparaconservaodaflora_2 = format_Prioridadeparaconservaodaflora_2.readFeatures(geojson);
    jsonSource_Prioridadeparaconservaodaflora_2.addFeatures(features_Prioridadeparaconservaodaflora_2);
}
var format_UnidadesdeConservaoMunicipais_3 = new ol.format.GeoJSON();
var jsonSource_UnidadesdeConservaoMunicipais_3 = new ol.source.Vector({
    attributions: ' ',
    format: format_UnidadesdeConservaoMunicipais_3
});var lyr_UnidadesdeConservaoMunicipais_3 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_UnidadesdeConservaoMunicipais_3, 
    style: style_UnidadesdeConservaoMunicipais_3,
    interactive: true,
    title: "Unidades de Conservação Municipais"
});

function getUnidadesdeConservaoMunicipais_3Json(geojson) {
    var features_UnidadesdeConservaoMunicipais_3 = format_UnidadesdeConservaoMunicipais_3.readFeatures(geojson);
    jsonSource_UnidadesdeConservaoMunicipais_3.addFeatures(features_UnidadesdeConservaoMunicipais_3);
}
var format_UnidadesdeConservaoFederais_4 = new ol.format.GeoJSON();
var jsonSource_UnidadesdeConservaoFederais_4 = new ol.source.Vector({
    attributions: ' ',
    format: format_UnidadesdeConservaoFederais_4
});var lyr_UnidadesdeConservaoFederais_4 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_UnidadesdeConservaoFederais_4, 
    style: style_UnidadesdeConservaoFederais_4,
    interactive: true,
    title: "Unidades de Conservação Federais"
});

function getUnidadesdeConservaoFederais_4Json(geojson) {
    var features_UnidadesdeConservaoFederais_4 = format_UnidadesdeConservaoFederais_4.readFeatures(geojson);
    jsonSource_UnidadesdeConservaoFederais_4.addFeatures(features_UnidadesdeConservaoFederais_4);
}
var format_UnidadesdeConservaoEstaduais_5 = new ol.format.GeoJSON();
var jsonSource_UnidadesdeConservaoEstaduais_5 = new ol.source.Vector({
    attributions: ' ',
    format: format_UnidadesdeConservaoEstaduais_5
});var lyr_UnidadesdeConservaoEstaduais_5 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_UnidadesdeConservaoEstaduais_5, 
    style: style_UnidadesdeConservaoEstaduais_5,
    interactive: true,
    title: "Unidades de Conservação Estaduais"
});

function getUnidadesdeConservaoEstaduais_5Json(geojson) {
    var features_UnidadesdeConservaoEstaduais_5 = format_UnidadesdeConservaoEstaduais_5.readFeatures(geojson);
    jsonSource_UnidadesdeConservaoEstaduais_5.addFeatures(features_UnidadesdeConservaoEstaduais_5);
}
var format_ReservadaBiosferadaMataAtlntica_6 = new ol.format.GeoJSON();
var jsonSource_ReservadaBiosferadaMataAtlntica_6 = new ol.source.Vector({
    attributions: ' ',
    format: format_ReservadaBiosferadaMataAtlntica_6
});var lyr_ReservadaBiosferadaMataAtlntica_6 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_ReservadaBiosferadaMataAtlntica_6, 
    style: style_ReservadaBiosferadaMataAtlntica_6,
    interactive: true,
    title: "Reserva da Biosfera da Mata Atlântica"
});

function getReservadaBiosferadaMataAtlntica_6Json(geojson) {
    var features_ReservadaBiosferadaMataAtlntica_6 = format_ReservadaBiosferadaMataAtlntica_6.readFeatures(geojson);
    jsonSource_ReservadaBiosferadaMataAtlntica_6.addFeatures(features_ReservadaBiosferadaMataAtlntica_6);
}
var format_Disponibilidadedeguasuperficial_7 = new ol.format.GeoJSON();
var jsonSource_Disponibilidadedeguasuperficial_7 = new ol.source.Vector({
    attributions: ' ',
    format: format_Disponibilidadedeguasuperficial_7
});var lyr_Disponibilidadedeguasuperficial_7 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Disponibilidadedeguasuperficial_7, 
    style: style_Disponibilidadedeguasuperficial_7,
    interactive: true,
    title: "Disponibilidade de água superficial"
});

function getDisponibilidadedeguasuperficial_7Json(geojson) {
    var features_Disponibilidadedeguasuperficial_7 = format_Disponibilidadedeguasuperficial_7.readFeatures(geojson);
    jsonSource_Disponibilidadedeguasuperficial_7.addFeatures(features_Disponibilidadedeguasuperficial_7);
}
var format_VazescalculadasparaabaciadoRioGrande_8 = new ol.format.GeoJSON();
var jsonSource_VazescalculadasparaabaciadoRioGrande_8 = new ol.source.Vector({
    attributions: ' ',
    format: format_VazescalculadasparaabaciadoRioGrande_8
});var lyr_VazescalculadasparaabaciadoRioGrande_8 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_VazescalculadasparaabaciadoRioGrande_8, 
    style: style_VazescalculadasparaabaciadoRioGrande_8,
    interactive: true,
    title: "Vazões calculadas para a bacia do Rio Grande"
});

function getVazescalculadasparaabaciadoRioGrande_8Json(geojson) {
    var features_VazescalculadasparaabaciadoRioGrande_8 = format_VazescalculadasparaabaciadoRioGrande_8.readFeatures(geojson);
    jsonSource_VazescalculadasparaabaciadoRioGrande_8.addFeatures(features_VazescalculadasparaabaciadoRioGrande_8);
}
var format_Outorgasdedireitodeusoderecursoshdricos_9 = new ol.format.GeoJSON();
var jsonSource_Outorgasdedireitodeusoderecursoshdricos_9 = new ol.source.Vector({
    attributions: ' ',
    format: format_Outorgasdedireitodeusoderecursoshdricos_9
});var lyr_Outorgasdedireitodeusoderecursoshdricos_9 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Outorgasdedireitodeusoderecursoshdricos_9, 
    style: style_Outorgasdedireitodeusoderecursoshdricos_9,
    interactive: true,
    title: "Outorgas de direito de uso de recursos hídricos"
});

function getOutorgasdedireitodeusoderecursoshdricos_9Json(geojson) {
    var features_Outorgasdedireitodeusoderecursoshdricos_9 = format_Outorgasdedireitodeusoderecursoshdricos_9.readFeatures(geojson);
    jsonSource_Outorgasdedireitodeusoderecursoshdricos_9.addFeatures(features_Outorgasdedireitodeusoderecursoshdricos_9);
}
var lyr_Altimetria_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Altimetria",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Altimetria_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5053927.131889, -2436881.922494, -5025405.209051, -2397113.697243]
                            })
                        });
var format_Curvasdenvel_11 = new ol.format.GeoJSON();
var features_Curvasdenvel_11 = format_Curvasdenvel_11.readFeatures(json_Curvasdenvel_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenvel_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvasdenvel_11.addFeatures(features_Curvasdenvel_11);
var lyr_Curvasdenvel_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curvasdenvel_11, 
                style: style_Curvasdenvel_11,
                interactive: true,
                title: '<img src="styles/legend/Curvasdenvel_11.png" /> Curvas de nível'
            });
var lyr_reasmecanizveis_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "Áreas mecanizáveis",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/reasmecanizveis_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5053927.131889, -2436881.922494, -5025405.209051, -2397113.697243]
                            })
                        });
var lyr_reasuscetvelgeada_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "Área suscetível à geada",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/reasuscetvelgeada_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5053869.566936, -2436876.632434, -5025392.979173, -2397117.808534]
                            })
                        });
var format_Fazendasvendas_14 = new ol.format.GeoJSON();
var features_Fazendasvendas_14 = format_Fazendasvendas_14.readFeatures(json_Fazendasvendas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fazendasvendas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fazendasvendas_14.addFeatures(features_Fazendasvendas_14);
var lyr_Fazendasvendas_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fazendasvendas_14, 
                style: style_Fazendasvendas_14,
                interactive: true,
                title: '<img src="styles/legend/Fazendasvendas_14.png" /> Fazendas à vendas'
            });
var format_Fazendasat10hectares_15 = new ol.format.GeoJSON();
var features_Fazendasat10hectares_15 = format_Fazendasat10hectares_15.readFeatures(json_Fazendasat10hectares_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fazendasat10hectares_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fazendasat10hectares_15.addFeatures(features_Fazendasat10hectares_15);
var lyr_Fazendasat10hectares_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fazendasat10hectares_15, 
                style: style_Fazendasat10hectares_15,
                interactive: true,
                title: '<img src="styles/legend/Fazendasat10hectares_15.png" /> Fazendas até 10 hectares'
            });
var format_Fazendasentre10e50hectares_16 = new ol.format.GeoJSON();
var features_Fazendasentre10e50hectares_16 = format_Fazendasentre10e50hectares_16.readFeatures(json_Fazendasentre10e50hectares_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fazendasentre10e50hectares_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fazendasentre10e50hectares_16.addFeatures(features_Fazendasentre10e50hectares_16);
var lyr_Fazendasentre10e50hectares_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fazendasentre10e50hectares_16, 
                style: style_Fazendasentre10e50hectares_16,
                interactive: true,
                title: '<img src="styles/legend/Fazendasentre10e50hectares_16.png" /> Fazendas entre 10 e 50 hectares'
            });
var format_FazendasMaioresque50hectares_17 = new ol.format.GeoJSON();
var features_FazendasMaioresque50hectares_17 = format_FazendasMaioresque50hectares_17.readFeatures(json_FazendasMaioresque50hectares_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendasMaioresque50hectares_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendasMaioresque50hectares_17.addFeatures(features_FazendasMaioresque50hectares_17);
var lyr_FazendasMaioresque50hectares_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FazendasMaioresque50hectares_17, 
                style: style_FazendasMaioresque50hectares_17,
                interactive: true,
                title: '<img src="styles/legend/FazendasMaioresque50hectares_17.png" /> Fazendas Maiores que 50 hectares'
            });
var format_MunicpiosMinasGerais_18 = new ol.format.GeoJSON();
var features_MunicpiosMinasGerais_18 = format_MunicpiosMinasGerais_18.readFeatures(json_MunicpiosMinasGerais_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicpiosMinasGerais_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosMinasGerais_18.addFeatures(features_MunicpiosMinasGerais_18);
var lyr_MunicpiosMinasGerais_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicpiosMinasGerais_18, 
                style: style_MunicpiosMinasGerais_18,
                interactive: true,
                title: '<img src="styles/legend/MunicpiosMinasGerais_18.png" /> Municípios Minas Gerais'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_reasprioritriasparaconservaodabiodiversidade_1.setVisible(true);lyr_Prioridadeparaconservaodaflora_2.setVisible(true);lyr_UnidadesdeConservaoMunicipais_3.setVisible(true);lyr_UnidadesdeConservaoFederais_4.setVisible(true);lyr_UnidadesdeConservaoEstaduais_5.setVisible(true);lyr_ReservadaBiosferadaMataAtlntica_6.setVisible(true);lyr_Disponibilidadedeguasuperficial_7.setVisible(true);lyr_VazescalculadasparaabaciadoRioGrande_8.setVisible(true);lyr_Outorgasdedireitodeusoderecursoshdricos_9.setVisible(true);lyr_Altimetria_10.setVisible(true);lyr_Curvasdenvel_11.setVisible(true);lyr_reasmecanizveis_12.setVisible(true);lyr_reasuscetvelgeada_13.setVisible(true);lyr_Fazendasvendas_14.setVisible(true);lyr_Fazendasat10hectares_15.setVisible(true);lyr_Fazendasentre10e50hectares_16.setVisible(true);lyr_FazendasMaioresque50hectares_17.setVisible(true);lyr_MunicpiosMinasGerais_18.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_reasprioritriasparaconservaodabiodiversidade_1,lyr_Prioridadeparaconservaodaflora_2,lyr_UnidadesdeConservaoMunicipais_3,lyr_UnidadesdeConservaoFederais_4,lyr_UnidadesdeConservaoEstaduais_5,lyr_ReservadaBiosferadaMataAtlntica_6,lyr_Disponibilidadedeguasuperficial_7,lyr_VazescalculadasparaabaciadoRioGrande_8,lyr_Outorgasdedireitodeusoderecursoshdricos_9,lyr_Altimetria_10,lyr_Curvasdenvel_11,lyr_reasmecanizveis_12,lyr_reasuscetvelgeada_13,lyr_Fazendasvendas_14,lyr_Fazendasat10hectares_15,lyr_Fazendasentre10e50hectares_16,lyr_FazendasMaioresque50hectares_17,lyr_MunicpiosMinasGerais_18];
lyr_reasprioritriasparaconservaodabiodiversidade_1.set('fieldAliases', {'da_area': 'da_area', 'categoria': 'categoria', 'acao_pri': 'acao_pri', 'numero_at': 'numero_at', });
lyr_Prioridadeparaconservaodaflora_2.set('fieldAliases', {'gridcode': 'gridcode', 'indicador': 'indicador', });
lyr_UnidadesdeConservaoMunicipais_3.set('fieldAliases', {'id': 'id', 'nome_uc': 'nome_uc', 'categoria': 'categoria', 'grupo': 'grupo', 'ato_legal': 'ato_legal', 'area_ofic': 'area_ofic', 'area_geo': 'area_geo', 'municipios': 'municipios', 'bioma': 'bioma', 'esfera': 'esfera', 'reg_ief': 'reg_ief', 'id_uc_': 'id_uc_', 'v_atual_': 'v_atual_', });
lyr_UnidadesdeConservaoFederais_4.set('fieldAliases', {'id': 'id', 'nome_uc': 'nome_uc', 'categoria': 'categoria', 'grupo': 'grupo', 'ato_legal': 'ato_legal', 'area_ofic': 'area_ofic', 'area_geo': 'area_geo', 'municipios': 'municipios', 'bioma': 'bioma', 'esfera': 'esfera', 'reg_ief': 'reg_ief', 'id_uc_': 'id_uc_', 'v_atual_': 'v_atual_', });
lyr_UnidadesdeConservaoEstaduais_5.set('fieldAliases', {'nome_uc': 'nome_uc', 'categoria': 'categoria', 'grupo': 'grupo', 'ato_legal': 'ato_legal', 'area_ofic': 'area_ofic', 'area_geo': 'area_geo', 'municipios': 'municipios', 'bioma': 'bioma', 'esfera': 'esfera', 'reg_ief': 'reg_ief', 'id_uc': 'id_uc', 'v_atual': 'v_atual', });
lyr_ReservadaBiosferadaMataAtlntica_6.set('fieldAliases', {'id': 'id', 'zona': 'zona', 'area_ha': 'area_ha', });
lyr_Disponibilidadedeguasuperficial_7.set('fieldAliases', {'gricode': 'gricode', 'id_classif': 'id_classif', 'descricao': 'descricao', });
lyr_VazescalculadasparaabaciadoRioGrande_8.set('fieldAliases', {'cocursodag': 'cocursodag', 'cobacia': 'cobacia', 'noriocomp': 'noriocomp', 'peq_': 'peq_', 'qmld_': 'qmld_', 'q90_': 'q90_', 'q95_': 'q95_', 'q7_10': 'q7_10', 'peq_ih_': 'peq_ih_', 'peq750_': 'peq750_', });
lyr_Outorgasdedireitodeusoderecursoshdricos_9.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'geocod_4': 'geocod_4', 'sigla_2': 'sigla_2', 'nome_2': 'nome_2', 'cbh_2': 'cbh_2', 'situ_cbh_2': 'situ_cbh_2', 'decreto_2': 'decreto_2', 'descricao_': 'descricao_', 'bacia_fede': 'bacia_fede', 'sede_2': 'sede_2', 'agencia_2': 'agencia_2', 'status_pd_': 'status_pd_', 'mumcert_4': 'mumcert_4', 'numpa_4': 'numpa_4', 'numport_4': 'numport_4', 'dtform_4': 'dtform_4', 'dtpub_4': 'dtpub_4', 'statuspa_4': 'statuspa_4', 'usoinsig_4': 'usoinsig_4', 'outcol_4': 'outcol_4', 'numdac_4': 'numdac_4', 'numdac_4_x': 'numdac_4_x', 'numdac_4_y': 'numdac_4_y', 'portcol_4': 'portcol_4', 'codsubtre_': 'codsubtre_', 'procunico_': 'procunico_', 'tipo_uso_4': 'tipo_uso_4', 'codmoduso_': 'codmoduso_', 'moduso_4': 'moduso_4', 'vazjan_4': 'vazjan_4', 'vazfev_4': 'vazfev_4', 'vazmar_4': 'vazmar_4', 'vazabr_4': 'vazabr_4', 'vazmai_4': 'vazmai_4', 'vazjun_4': 'vazjun_4', 'vazjulh_4': 'vazjulh_4', 'vazago_4': 'vazago_4', 'vazset_4': 'vazset_4', 'vazout_4': 'vazout_4', 'vaznov_4': 'vaznov_4', 'vazdez_4': 'vazdez_4', 'tcapjan_4': 'tcapjan_4', 'tcapfev_4': 'tcapfev_4', 'tcapmar_4': 'tcapmar_4', 'tcapabr_4': 'tcapabr_4', 'tcapmai_4': 'tcapmai_4', 'tcapjun_4': 'tcapjun_4', 'tcapjul_4': 'tcapjul_4', 'tcapago_4': 'tcapago_4', 'tcapset_4': 'tcapset_4', 'tcapout_4': 'tcapout_4', 'tcapnov_4': 'tcapnov_4', 'tcapdez_4': 'tcapdez_4', 'dia_jan_4': 'dia_jan_4', 'dia_fev_4': 'dia_fev_4', 'dia_mar_4': 'dia_mar_4', 'dia_abr_4': 'dia_abr_4', 'dia_mai_4': 'dia_mai_4', 'dia_jun_4': 'dia_jun_4', 'dia_jul_4': 'dia_jul_4', 'dia_ago_4': 'dia_ago_4', 'dia_set_4': 'dia_set_4', 'dia_out_4': 'dia_out_4', 'dia_nov_4': 'dia_nov_4', 'dia_dez_4': 'dia_dez_4', 'qdh_jan_4': 'qdh_jan_4', 'qdh_fev_4': 'qdh_fev_4', 'qdh_mar_4': 'qdh_mar_4', 'qdh_abr_4': 'qdh_abr_4', 'qdh_mai_4': 'qdh_mai_4', 'qdh_jun_4': 'qdh_jun_4', 'qdh_jul_4': 'qdh_jul_4', 'qdh_ago_4': 'qdh_ago_4', 'qdh_set_4': 'qdh_set_4', 'qdh_out_4': 'qdh_out_4', 'qdh_nov_4': 'qdh_nov_4', 'qdh_dez_4': 'qdh_dez_4', 'volacum3_4': 'volacum3_4', 'arinuha_4': 'arinuha_4', 'estdesc_4': 'estdesc_4', 'vazsem3_4': 'vazsem3_4', 'profpc_4': 'profpc_4', 'diapcmm_4': 'diapcmm_4', 'finuso_4': 'finuso_4', 'tpoconsu_4': 'tpoconsu_4', 'unidvaz_4': 'unidvaz_4', 'nomemp_1': 'nomemp_1', 'nomfant_2': 'nomfant_2', 'diavenc_4': 'diavenc_4', 'mesvenc_4': 'mesvenc_4', 'anovenc_4': 'anovenc_4', 'estatus_va': 'estatus_va', 'codmun_2': 'codmun_2', 'nome_mun_2': 'nome_mun_2', 'geometria_': 'geometria_', 'procren_4': 'procren_4', 'statusproc': 'statusproc', 'cocursodag': 'cocursodag', 'cobacia_6': 'cobacia_6', 'uniurga_4': 'uniurga_4', 'lat_y_4': 'lat_y_4', 'long_x_4': 'long_x_4', 'datverbase': 'datverbase', });
lyr_Curvasdenvel_11.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Fazendasvendas_14.set('fieldAliases', {'CAR': 'CAR', 'AREA': 'AREA', 'MUNICIPIO': 'MUNICIPIO', 'VENDA': 'VENDA', 'Contato': 'Contato', 'Link': 'Link', });
lyr_Fazendasat10hectares_15.set('fieldAliases', {'CAR': 'CAR', 'AREA': 'AREA', 'MUNICIPIO': 'MUNICIPIO', 'VENDA': 'VENDA', 'Contato': 'Contato', 'Link': 'Link', });
lyr_Fazendasentre10e50hectares_16.set('fieldAliases', {'CAR': 'CAR', 'AREA': 'AREA', 'MUNICIPIO': 'MUNICIPIO', 'VENDA': 'VENDA', 'Contato': 'Contato', 'Link': 'Link', });
lyr_FazendasMaioresque50hectares_17.set('fieldAliases', {'CAR': 'CAR', 'AREA': 'AREA', 'MUNICIPIO': 'MUNICIPIO', 'VENDA': 'VENDA', 'Contato': 'Contato', 'Link': 'Link', });
lyr_MunicpiosMinasGerais_18.set('fieldAliases', {'NOME': 'NOME', 'AREA': 'AREA', });
lyr_reasprioritriasparaconservaodabiodiversidade_1.set('fieldImages', {'da_area': 'TextEdit', 'categoria': 'TextEdit', 'acao_pri': 'TextEdit', 'numero_at': 'TextEdit', });
lyr_Prioridadeparaconservaodaflora_2.set('fieldImages', {'gridcode': 'Range', 'indicador': 'TextEdit', });
lyr_UnidadesdeConservaoMunicipais_3.set('fieldImages', {'id': '', 'nome_uc': '', 'categoria': '', 'grupo': '', 'ato_legal': '', 'area_ofic': '', 'area_geo': '', 'municipios': '', 'bioma': '', 'esfera': '', 'reg_ief': '', 'id_uc_': '', 'v_atual_': '', });
lyr_UnidadesdeConservaoFederais_4.set('fieldImages', {'id': '', 'nome_uc': '', 'categoria': '', 'grupo': '', 'ato_legal': '', 'area_ofic': '', 'area_geo': '', 'municipios': '', 'bioma': '', 'esfera': '', 'reg_ief': '', 'id_uc_': '', 'v_atual_': '', });
lyr_UnidadesdeConservaoEstaduais_5.set('fieldImages', {'nome_uc': '', 'categoria': '', 'grupo': '', 'ato_legal': '', 'area_ofic': '', 'area_geo': '', 'municipios': '', 'bioma': '', 'esfera': '', 'reg_ief': '', 'id_uc': '', 'v_atual': '', });
lyr_ReservadaBiosferadaMataAtlntica_6.set('fieldImages', {'id': 'Range', 'zona': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_Disponibilidadedeguasuperficial_7.set('fieldImages', {'gricode': 'TextEdit', 'id_classif': 'TextEdit', 'descricao': 'TextEdit', });
lyr_VazescalculadasparaabaciadoRioGrande_8.set('fieldImages', {'cocursodag': 'TextEdit', 'cobacia': 'TextEdit', 'noriocomp': 'TextEdit', 'peq_': 'TextEdit', 'qmld_': 'TextEdit', 'q90_': 'TextEdit', 'q95_': 'TextEdit', 'q7_10': 'TextEdit', 'peq_ih_': 'TextEdit', 'peq750_': 'TextEdit', });
lyr_Outorgasdedireitodeusoderecursoshdricos_9.set('fieldImages', {'ogc_fid': '', 'objectid': 'TextEdit', 'geocod_4': 'TextEdit', 'sigla_2': 'TextEdit', 'nome_2': 'TextEdit', 'cbh_2': 'TextEdit', 'situ_cbh_2': 'TextEdit', 'decreto_2': 'TextEdit', 'descricao_': 'TextEdit', 'bacia_fede': 'TextEdit', 'sede_2': 'TextEdit', 'agencia_2': 'TextEdit', 'status_pd_': 'TextEdit', 'mumcert_4': 'TextEdit', 'numpa_4': 'TextEdit', 'numport_4': 'TextEdit', 'dtform_4': 'TextEdit', 'dtpub_4': 'TextEdit', 'statuspa_4': 'TextEdit', 'usoinsig_4': 'TextEdit', 'outcol_4': 'TextEdit', 'numdac_4': 'TextEdit', 'numdac_4_x': 'TextEdit', 'numdac_4_y': 'TextEdit', 'portcol_4': 'TextEdit', 'codsubtre_': 'TextEdit', 'procunico_': 'TextEdit', 'tipo_uso_4': 'TextEdit', 'codmoduso_': 'TextEdit', 'moduso_4': 'TextEdit', 'vazjan_4': 'TextEdit', 'vazfev_4': 'TextEdit', 'vazmar_4': 'TextEdit', 'vazabr_4': 'TextEdit', 'vazmai_4': 'TextEdit', 'vazjun_4': 'TextEdit', 'vazjulh_4': 'TextEdit', 'vazago_4': 'TextEdit', 'vazset_4': 'TextEdit', 'vazout_4': 'TextEdit', 'vaznov_4': 'TextEdit', 'vazdez_4': 'TextEdit', 'tcapjan_4': 'TextEdit', 'tcapfev_4': 'TextEdit', 'tcapmar_4': 'TextEdit', 'tcapabr_4': 'TextEdit', 'tcapmai_4': 'TextEdit', 'tcapjun_4': 'TextEdit', 'tcapjul_4': 'TextEdit', 'tcapago_4': 'TextEdit', 'tcapset_4': 'TextEdit', 'tcapout_4': 'TextEdit', 'tcapnov_4': 'TextEdit', 'tcapdez_4': 'TextEdit', 'dia_jan_4': 'TextEdit', 'dia_fev_4': 'TextEdit', 'dia_mar_4': 'TextEdit', 'dia_abr_4': 'TextEdit', 'dia_mai_4': 'TextEdit', 'dia_jun_4': 'TextEdit', 'dia_jul_4': 'TextEdit', 'dia_ago_4': 'TextEdit', 'dia_set_4': 'TextEdit', 'dia_out_4': 'TextEdit', 'dia_nov_4': 'TextEdit', 'dia_dez_4': 'TextEdit', 'qdh_jan_4': 'TextEdit', 'qdh_fev_4': 'TextEdit', 'qdh_mar_4': 'TextEdit', 'qdh_abr_4': 'TextEdit', 'qdh_mai_4': 'TextEdit', 'qdh_jun_4': 'TextEdit', 'qdh_jul_4': 'TextEdit', 'qdh_ago_4': 'TextEdit', 'qdh_set_4': 'TextEdit', 'qdh_out_4': 'TextEdit', 'qdh_nov_4': 'TextEdit', 'qdh_dez_4': 'TextEdit', 'volacum3_4': 'TextEdit', 'arinuha_4': 'TextEdit', 'estdesc_4': 'TextEdit', 'vazsem3_4': 'TextEdit', 'profpc_4': 'TextEdit', 'diapcmm_4': 'TextEdit', 'finuso_4': 'TextEdit', 'tpoconsu_4': 'TextEdit', 'unidvaz_4': 'TextEdit', 'nomemp_1': 'TextEdit', 'nomfant_2': 'TextEdit', 'diavenc_4': 'TextEdit', 'mesvenc_4': 'TextEdit', 'anovenc_4': 'TextEdit', 'estatus_va': 'TextEdit', 'codmun_2': 'TextEdit', 'nome_mun_2': 'TextEdit', 'geometria_': 'TextEdit', 'procren_4': 'TextEdit', 'statusproc': 'TextEdit', 'cocursodag': 'TextEdit', 'cobacia_6': 'TextEdit', 'uniurga_4': 'TextEdit', 'lat_y_4': 'TextEdit', 'long_x_4': 'TextEdit', 'datverbase': 'TextEdit', });
lyr_Curvasdenvel_11.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Fazendasvendas_14.set('fieldImages', {'CAR': '', 'AREA': '', 'MUNICIPIO': '', 'VENDA': '', 'Contato': '', 'Link': '', });
lyr_Fazendasat10hectares_15.set('fieldImages', {'CAR': '', 'AREA': '', 'MUNICIPIO': '', 'VENDA': '', 'Contato': '', 'Link': '', });
lyr_Fazendasentre10e50hectares_16.set('fieldImages', {'CAR': '', 'AREA': '', 'MUNICIPIO': '', 'VENDA': '', 'Contato': '', 'Link': '', });
lyr_FazendasMaioresque50hectares_17.set('fieldImages', {'CAR': 'TextEdit', 'AREA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'VENDA': 'TextEdit', 'Contato': 'TextEdit', 'Link': 'TextEdit', });
lyr_MunicpiosMinasGerais_18.set('fieldImages', {'NOME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_reasprioritriasparaconservaodabiodiversidade_1.set('fieldLabels', {'da_area': 'no label', 'categoria': 'no label', 'acao_pri': 'no label', 'numero_at': 'no label', });
lyr_Prioridadeparaconservaodaflora_2.set('fieldLabels', {'gridcode': 'no label', 'indicador': 'no label', });
lyr_UnidadesdeConservaoMunicipais_3.set('fieldLabels', {'id': 'no label', 'nome_uc': 'no label', 'categoria': 'no label', 'grupo': 'no label', 'ato_legal': 'no label', 'area_ofic': 'no label', 'area_geo': 'no label', 'municipios': 'no label', 'bioma': 'no label', 'esfera': 'no label', 'reg_ief': 'no label', 'id_uc_': 'no label', 'v_atual_': 'no label', });
lyr_UnidadesdeConservaoFederais_4.set('fieldLabels', {'id': 'no label', 'nome_uc': 'no label', 'categoria': 'no label', 'grupo': 'no label', 'ato_legal': 'no label', 'area_ofic': 'no label', 'area_geo': 'no label', 'municipios': 'no label', 'bioma': 'no label', 'esfera': 'no label', 'reg_ief': 'no label', 'id_uc_': 'no label', 'v_atual_': 'no label', });
lyr_UnidadesdeConservaoEstaduais_5.set('fieldLabels', {'nome_uc': 'no label', 'categoria': 'no label', 'grupo': 'no label', 'ato_legal': 'no label', 'area_ofic': 'no label', 'area_geo': 'no label', 'municipios': 'no label', 'bioma': 'no label', 'esfera': 'no label', 'reg_ief': 'no label', 'id_uc': 'no label', 'v_atual': 'no label', });
lyr_ReservadaBiosferadaMataAtlntica_6.set('fieldLabels', {'id': 'no label', 'zona': 'no label', 'area_ha': 'no label', });
lyr_Disponibilidadedeguasuperficial_7.set('fieldLabels', {'gricode': 'no label', 'id_classif': 'no label', 'descricao': 'no label', });
lyr_VazescalculadasparaabaciadoRioGrande_8.set('fieldLabels', {'cocursodag': 'no label', 'cobacia': 'no label', 'noriocomp': 'no label', 'peq_': 'no label', 'qmld_': 'no label', 'q90_': 'no label', 'q95_': 'no label', 'q7_10': 'no label', 'peq_ih_': 'no label', 'peq750_': 'no label', });
lyr_Outorgasdedireitodeusoderecursoshdricos_9.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'geocod_4': 'no label', 'sigla_2': 'no label', 'nome_2': 'no label', 'cbh_2': 'header label', 'situ_cbh_2': 'inline label', 'decreto_2': 'no label', 'descricao_': 'no label', 'bacia_fede': 'no label', 'sede_2': 'no label', 'agencia_2': 'no label', 'status_pd_': 'no label', 'mumcert_4': 'no label', 'numpa_4': 'no label', 'numport_4': 'no label', 'dtform_4': 'no label', 'dtpub_4': 'no label', 'statuspa_4': 'no label', 'usoinsig_4': 'no label', 'outcol_4': 'no label', 'numdac_4': 'no label', 'numdac_4_x': 'no label', 'numdac_4_y': 'no label', 'portcol_4': 'no label', 'codsubtre_': 'no label', 'procunico_': 'no label', 'tipo_uso_4': 'no label', 'codmoduso_': 'no label', 'moduso_4': 'no label', 'vazjan_4': 'no label', 'vazfev_4': 'no label', 'vazmar_4': 'no label', 'vazabr_4': 'no label', 'vazmai_4': 'no label', 'vazjun_4': 'no label', 'vazjulh_4': 'no label', 'vazago_4': 'no label', 'vazset_4': 'no label', 'vazout_4': 'no label', 'vaznov_4': 'no label', 'vazdez_4': 'no label', 'tcapjan_4': 'no label', 'tcapfev_4': 'no label', 'tcapmar_4': 'no label', 'tcapabr_4': 'no label', 'tcapmai_4': 'no label', 'tcapjun_4': 'no label', 'tcapjul_4': 'no label', 'tcapago_4': 'no label', 'tcapset_4': 'no label', 'tcapout_4': 'no label', 'tcapnov_4': 'no label', 'tcapdez_4': 'no label', 'dia_jan_4': 'no label', 'dia_fev_4': 'no label', 'dia_mar_4': 'no label', 'dia_abr_4': 'no label', 'dia_mai_4': 'no label', 'dia_jun_4': 'no label', 'dia_jul_4': 'no label', 'dia_ago_4': 'no label', 'dia_set_4': 'no label', 'dia_out_4': 'no label', 'dia_nov_4': 'no label', 'dia_dez_4': 'no label', 'qdh_jan_4': 'no label', 'qdh_fev_4': 'no label', 'qdh_mar_4': 'no label', 'qdh_abr_4': 'no label', 'qdh_mai_4': 'no label', 'qdh_jun_4': 'no label', 'qdh_jul_4': 'no label', 'qdh_ago_4': 'no label', 'qdh_set_4': 'no label', 'qdh_out_4': 'no label', 'qdh_nov_4': 'no label', 'qdh_dez_4': 'no label', 'volacum3_4': 'no label', 'arinuha_4': 'no label', 'estdesc_4': 'no label', 'vazsem3_4': 'no label', 'profpc_4': 'no label', 'diapcmm_4': 'no label', 'finuso_4': 'no label', 'tpoconsu_4': 'no label', 'unidvaz_4': 'no label', 'nomemp_1': 'no label', 'nomfant_2': 'no label', 'diavenc_4': 'no label', 'mesvenc_4': 'no label', 'anovenc_4': 'no label', 'estatus_va': 'no label', 'codmun_2': 'no label', 'nome_mun_2': 'no label', 'geometria_': 'no label', 'procren_4': 'no label', 'statusproc': 'no label', 'cocursodag': 'no label', 'cobacia_6': 'no label', 'uniurga_4': 'no label', 'lat_y_4': 'no label', 'long_x_4': 'no label', 'datverbase': 'no label', });
lyr_Curvasdenvel_11.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'header label', });
lyr_Fazendasvendas_14.set('fieldLabels', {'CAR': 'header label', 'AREA': 'header label', 'MUNICIPIO': 'header label', 'VENDA': 'header label', 'Contato': 'header label', 'Link': 'header label', });
lyr_Fazendasat10hectares_15.set('fieldLabels', {'CAR': 'header label', 'AREA': 'header label', 'MUNICIPIO': 'header label', 'VENDA': 'header label', 'Contato': 'header label', 'Link': 'header label', });
lyr_Fazendasentre10e50hectares_16.set('fieldLabels', {'CAR': 'header label', 'AREA': 'header label', 'MUNICIPIO': 'header label', 'VENDA': 'header label', 'Contato': 'header label', 'Link': 'header label', });
lyr_FazendasMaioresque50hectares_17.set('fieldLabels', {'CAR': 'header label', 'AREA': 'header label', 'MUNICIPIO': 'header label', 'VENDA': 'header label', 'Contato': 'header label', 'Link': 'header label', });
lyr_MunicpiosMinasGerais_18.set('fieldLabels', {'NOME': 'header label', 'AREA': 'header label', });
lyr_MunicpiosMinasGerais_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});