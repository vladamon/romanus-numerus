import { expect } from 'chai';
import { toRoman, fromRoman, detect } from '../lib/index';
import errors from '../src/errors';

const types = {
    int: 'integer',
    roman: 'roman',
    undetected: 'undetected'
}

describe('@romanus-numerus/romanus-aux', () => {
	describe('toRoman', () => {
		it('should validate inputs', () => {
			expect(() => toRoman()).to.throw(errors.wrongInput.toRoman);
            expect(() => toRoman('abc')).to.throw(errors.wrongInput.toRoman);
            expect(() => toRoman('MMC')).to.throw(errors.wrongInput.toRoman);
            expect(() => toRoman('MMC123')).to.throw(errors.wrongInput.toRoman);
            expect(() => toRoman('123ab')).to.throw(errors.wrongInput.toRoman);

            expect(() => toRoman(10).to.not.throw())
		});

        it('should convert integer to roman', () => {
            expect(toRoman(10)).to.equal('X')
            expect(toRoman(49)).to.equal('XLIX')
            expect(toRoman(399)).to.equal('CCCXCIX')
            expect(toRoman(3999)).to.equal('MMMCMXCIX')

            expect(toRoman(10)).not.to.equal('XI')
        })

        it('should throw if input limit has exceeded', () => {
            expect(() => toRoman(9999)).to.throw(errors.failedConverting.toRoman)
            expect(() => toRoman(3999)).not.to.throw(errors.failedConverting.toRoman)
        })
	});

    describe('fromRoman', () => {
        it('should validate inputs', () => {
			expect(() => fromRoman()).to.throw(errors.wrongInput.fromRoman);
            expect(() => fromRoman('abc')).to.throw(errors.wrongInput.fromRoman);
            expect(() => fromRoman('MmC')).to.throw(errors.wrongInput.fromRoman);
            expect(() => fromRoman('MMC123')).to.throw(errors.wrongInput.fromRoman);
            expect(() => fromRoman('123ab')).to.throw(errors.wrongInput.fromRoman);

            expect(() => fromRoman('MMC').to.not.throw())
		});

        it('should convert roman to integer', () => {
            expect(fromRoman('X')).to.equal(10)
            expect(fromRoman('XLIX')).to.equal(49)
            expect(fromRoman('CCCXCIX')).to.equal(399)
            expect(fromRoman('MMMCMXCIX')).to.equal(3999)

            expect(fromRoman('XI')).not.to.equal(10)
        })

        it('should throw if input limit has exceeded', () => {
            expect(() => fromRoman('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM')).to.throw(errors.failedConverting.fromRoman)
            expect(() => fromRoman('MMCM')).not.to.throw(errors.failedConverting.fromRoman)
        })
    })

    describe('detect', () => {
        it('should return undetected if nothing or wrong format is passed in', () => {
            expect(detect()).to.equal(types.undetected)
            expect(detect(0)).to.equal(types.undetected)
            expect(detect('MMCMMMMMM')).to.equal(types.undetected)
            expect(detect(-55)).to.equal(types.undetected)
            expect(detect('5678abc')).to.equal(types.undetected)
            expect(detect(10)).not.to.equal(types.undetected)
        })

        it('should correctly detect integer', () => {
            expect(detect('27')).to.equal(types.int)
            expect(detect(3999)).to.equal(types.int)
            expect(detect(-50)).not.to.equal(types.int)
            expect(detect('MMC')).not.to.equal(types.int)
        })

        it('should correctly detect roman', () => {
            expect(detect('MMC')).to.equal(types.roman)
            expect(detect(123)).not.to.equal(types.roman)
            expect(detect('MMCaaa')).not.to.equal(types.roman)
            expect(detect('MMMMCCCC')).not.to.equal(types.roman)
            expect(detect('MMMCMXCIX')).to.equal(types.roman)
        })
    })
});
