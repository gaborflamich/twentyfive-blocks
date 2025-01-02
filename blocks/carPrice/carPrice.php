<?php
    $price = get_field('price', $post_id);
?>

<div class="wpf-price">
   <span class=wpf-price-amount><?= $price ?></span>
   <span class="wpf-price-currency">€</span>
</div>
