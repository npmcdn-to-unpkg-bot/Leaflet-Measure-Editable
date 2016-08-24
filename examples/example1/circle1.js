(function(L, undefined) {
  L.Measure = L.Measure || {};

  /**
   * Класс инструмента для измерения координат.
   */
  L.Measure.Circle1 = L.Measure.Circle.extend({

    /*
     Метод для получения маркеров инструмента редактирования, имеющих метки
     @param {Object} editor Инструмент редактирования
     @returns {Object[]} Массив помеченных маркеров инструмента редактирования.
     */
    _labelledMarkers: function(editor) {
      var latlngs = editor.getLatLngs();
      var markers = [];
      markers.push(latlngs[1].__vertex)
      return markers;
    },

    /*
     Метод для получения маркеров инструмента редактирования, не имеющих меток
     @param {Object} editor Инструмент редактирования
     @returns {Object[]} Массив не помеченных маркеров инструмента редактирования.
     */
    _unlabelledMarkers: function(editor) {
      var latlngs = editor.getLatLngs();
      var markers = [];
      markers.push(latlngs[0].__vertex)
      return markers;
    },


    /**
     Метод для получения текстового описания результатов измерений.
     @param {Object} e Аргументы метода.
     @param {Object} e.layer Слой с геометрией, представляющей производимые измерения.
     @param {Object} e.latlng Точка геометрии, для которой требуется получить текстовое описание измерений.
     */
    _getLabelContent: function(layer, latlng) {
      var radius = layer.getRadius();
      var  radiusText = this.getRadiusText({radius: radius});
      return '<b>' + 'Радиус: ' + radiusText + '</b>';
    },

     /**
    Метод обновления основного лейбла измеряемого объекта
    @param {Object} layer Редактируемый слой.
    */
    _updateMeasureLabel: function(layer, e) {
      var radius = layer.getRadius();
      var areaText = '<b>Площадь: ' + this.getCircleAreaText({radius: radius}) + '</b>';
      var latlngs = layer.editor.getLatLngs();
      var marker = latlngs[0].__vertex;
      this._showLabel(marker, areaText);
    },

  });

  /**
   Фабричный метод для создания экземпляра инструмента измерения координат.
   */
  L.Measure.circle1 = function(map, options) {
    return new L.Measure.Circle1(map, options);
  };

})(L);
