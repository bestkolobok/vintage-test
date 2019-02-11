module.exports = {
    // assetsDir: 'static',
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            sass: {
                data: `
                  @import "@/assets/scss/_colors.scss";
                  @import "@/assets/scss/_general.scss";
                  @import "@/assets/scss/_fonts.scss";
                `
            }
        }
    }
}