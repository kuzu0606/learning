
<script>
  export let data;
</script>

<h1>{data.vocabs.length>30 ? 'more than 30': 'less than 30'}</h1>

<ul style="list-style;square;">
  {#each data.vocabs as voca}
    <p>{voca.hiragana}  {voca.katakana}  </p>
  {/each}
</ul>
