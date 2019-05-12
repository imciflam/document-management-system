from rest_framework.exceptions import ParseError
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView

class MyUploadView(APIView):
    parser_class = (FileUploadParser,)

    def put(self, request, format=None):
        if 'fileDocument' not in request.data:
            raise ParseError("Empty content")

        f = request.data['fileDocument']

        mymodel.my_file_field.save(f.name, f, save=True)
        return Response(status=status.HTTP_201_CREATED)