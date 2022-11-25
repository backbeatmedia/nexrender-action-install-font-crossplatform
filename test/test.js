const {resolve} = require('path')

const installer = require('../index.js')

const settings = {
    logger: { // a substitute logger that suppresses all
        log: ()=>{},
        info: ()=>{},
        error: ()=>{},
    }
}

jest.setTimeout(10000);

describe("nexrender-action-install-font-crossplatform", ()=>{

    test("installs fonts", async ()=>{
        
        let job = {
            workpath: resolve('./test/fonts')
        }

        let result
        
        await installer(job, settings, null, 'prerender').catch(e => result = e)
        expect(result).toBeUndefined();
    })

})
