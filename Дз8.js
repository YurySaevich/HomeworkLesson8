function Cat(name,foodAmount) {
    this.name = name;
    function formatFoodAmount() {
        return  foodAmount + ' гр.';
    }
    this.feed = function() {
        return 'Насыпаем в миску '+formatFoodAmount()+' корма.';
    };
}
var barsik = new Cat('Барсик',50);
barsik.feed();
