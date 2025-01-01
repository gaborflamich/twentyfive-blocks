<?php
    $label = get_field('label');
    $link = get_field('link');
    $align = get_field('align');
?>

<div class="wpf-cta-<?= $align ?>">
    <a href="<?= $link ?>" class="wpf-cta">
        <?php if ($label) : ?>
            <?= $label ?>
        <?php else : ?>
            Click me
        <?php endif ?>
    </a>
</div>
