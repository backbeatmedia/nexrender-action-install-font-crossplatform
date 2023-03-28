const {resolve} = require('path')

const installer = require('../index.js')

const settings = {
    logger: console
}

jest.setTimeout(10000);

describe("nexrender-action-install-font-crossplatform", ()=>{

    test("installs fonts", async ()=>{
        
        let job = {
            workpath: resolve('./test/fonts'),
            uid: 'testing'
        }

        let result
        
        await installer(job, settings, null, 'prerender').catch(e => result = e)
        expect(result).toBeUndefined();
    })

})
