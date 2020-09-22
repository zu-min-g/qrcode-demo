<template>
    <b-container>
        <InputField :label="$t('bookmark.title')" id="bmName" v-model="bmName" @input="$emit('input', getModel())" />
        <InputField :label="$t('bookmark.url')" id="bmUrl" v-model="bmUrl" @input="$emit('input', getModel())" />
    </b-container>
</template>

<script>
export default {
    props: {
        value: Object
    },

    data () {
        return {
            bmName: this.value.name || '',
            bmUrl: this.value.url || '',
        }
    },

    methods: {
        getModel() {
            let bm = ''

            bm += "MEBKM:";
            if(this.bmName) bm += `TITLE:${this.bmName};`;
            if(this.bmUrl) bm += `URL:${this.bmUrl};`;
            bm += ";";

            return {
                name: this.bmName,
                url: this.bmUrl,
                text: bm,
            }
        }
    }
}
</script>
