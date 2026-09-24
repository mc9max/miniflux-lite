FROM miniflux/miniflux:latest

USER root

# Ensure proper permissions
RUN chmod -R 755 /usr/bin/miniflux

# Switch back to non-root user
USER miniflux

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget -qO- http://localhost:${PORT:-8080}/health || exit 1

CMD ["/usr/bin/miniflux"]
