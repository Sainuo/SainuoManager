/**
 * @author : zy3364432
 * @date   : 20180906
 */
import simpleprint from "~/static/javascript/simplePrint"
export default {
    install(vue) {
        if (this.installed) return;
        this.installed = true;

        vue.prototype.$simpleprint = function(selector){
            return simpleprint(selector);
        };
    }
};