<footer class="site-footer">
 <p><?php bloginfo('name'); ?> - &copy; Copyright <?php echo date('Y');?> </p>
</footer>
</div><!-- /container -->
<?php wp_footer(); ?> <!-- put this template tag immediately before closing body tag
of you'll break some plugins, which usually use this hook to reference javaScript files -->
</body>
</html>