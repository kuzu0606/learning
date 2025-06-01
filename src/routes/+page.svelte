
<script>
  export let data;
</script>

<ul style="list-style;square;">
  {#each data.vocabs as voca}
    <li>{voca.hiragana}  {voca.katakana}  </li>
  {/each}
</ul>
