FROM alpine:3.11

COPY entrypoint.sh /entrypoint.sh

CMD ["chmod","o+rwx","entrypoint.sh"]

ENTRYPOINT [ "/entrypoint.sh" ]