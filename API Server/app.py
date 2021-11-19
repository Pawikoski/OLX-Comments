from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

class NoteModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    olx_id = db.Column(db.Integer, nullable=False)
    content = db.Column(db.String(400), nullable=False)
    offer_views = db.Column(db.Integer, nullable=False)
    # date = db.Column(db.DateTime(timezone=True), server_default=func.now(), nullable=False)




note_put_args = reqparse.RequestParser()
note_put_args.add_argument("content", type=str, help="Content of note", required=True)
note_put_args.add_argument("offer_views", type=int, help="Count of the offer views")

# def _404(olx_id):
#     if olx_id not in notes:
#         abort(404, error="OLX ID is not valid!")
resource_fields = {
    'id': fields.Integer,
    'olx_id': fields.Integer,
    'content': fields.String,
    'offer_views': fields.Integer,
}


class Notes(Resource):
    @marshal_with(resource_fields)
    def get(self, olx_id):
        result = NoteModel.query.filter_by(olx_id=olx_id).all()
        return result
    
    @marshal_with(resource_fields)
    def put(self, olx_id):
        args = note_put_args.parse_args()
        note = NoteModel(olx_id=olx_id, content=args['content'], offer_views=args['offer_views'])
        db.session.add(note)
        db.session.commit()

        return note, 201

api.add_resource(Notes, "/notes/<int:olx_id>")


if __name__ == "__main__":
    app.run(debug=True)
